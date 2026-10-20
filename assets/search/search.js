// Kirra docs search.
// The index (search.json) is built by GitHub Pages from every doc page, so new pages are found
// without any registration. It is fetched the first time someone uses the search box.
// Each page arrives as rendered HTML and is split here into sections at its h1/h2/h3 headings,
// so a result links straight to the section that matched.
(function () {
	"use strict";

	var BASE = window.KIRRA_DOCS_BASE || "/";
	var REQUEST_EMAIL = "blastingapps.xyz@gmail.com";
	var DROPDOWN_LIMIT = 8;
	var RELEASE_NOTES_WEIGHT = 0.25; // a how-to should outrank the changelog

	var sectionsPromise = null;

	// Step 1) Load and split the index -------------------------------------------------------

	function loadSections() {
		if (!sectionsPromise) {
			sectionsPromise = fetch(BASE + "search.json")
				.then(function (r) {
					if (!r.ok) throw new Error("search.json " + r.status);
					return r.json();
				})
				.then(function (pages) {
					var out = [];
					pages.forEach(function (p) {
						out = out.concat(splitPage(p));
					});
					return out;
				});
			sectionsPromise.catch(function () {
				sectionsPromise = null; // allow a retry on the next keystroke
			});
		}
		return sectionsPromise;
	}

	function splitPage(page) {
		var doc = new DOMParser().parseFromString(page.html, "text/html");
		var h1 = doc.querySelector("h1");
		var pageTitle = (h1 ? h1.textContent : page.title || "").trim();
		var category = categoryOf(page.url);
		var weight = /release-notes\.html$/.test(page.url) ? RELEASE_NOTES_WEIGHT : 1;
		var sections = [];
		var current = { heading: "", anchor: "", text: [] };

		function flush() {
			var text = clean(current.text.join(" "));
			if (current.heading || text) {
				sections.push({
					pageTitle: pageTitle,
					heading: current.heading,
					url: page.url + (current.anchor ? "#" + current.anchor : ""),
					category: category,
					text: text,
					weight: weight,
					lcTitle: pageTitle.toLowerCase(),
					lcHeading: current.heading.toLowerCase(),
					lcText: text.toLowerCase()
				});
			}
		}

		Array.prototype.forEach.call(doc.body.children, function (el) {
			var tag = el.tagName;
			if (tag === "H1") return; // the page title, already captured
			if ((tag === "H2" || tag === "H3") && el.id) {
				flush();
				current = { heading: clean(el.textContent), anchor: el.id, text: [] };
			} else {
				current.text.push(textOf(el));
			}
		});
		flush();
		return sections;
	}

	// textContent runs table cells and list items together ("BurdenRelief"), so add a space
	// after each block-level element. Inline elements (bold, code, links) join as written.
	var BLOCK_TAGS = /^(P|DIV|LI|DT|DD|TD|TH|TR|BR|PRE|BLOCKQUOTE|H[1-6]|UL|OL|TABLE|FIGCAPTION)$/;

	function textOf(node) {
		if (node.nodeType === 3) return node.data;
		var s = "";
		for (var c = node.firstChild; c; c = c.nextSibling) s += textOf(c);
		return BLOCK_TAGS.test(node.tagName) ? s + " " : s;
	}

	function clean(s) {
		return s.replace(/\s+/g, " ").trim();
	}

	function categoryOf(url) {
		var path = url.indexOf(BASE) === 0 ? url.slice(BASE.length) : url;
		var parts = path.split("/");
		if (parts.length < 2) return "";
		var c = parts[0].replace(/-/g, " ");
		return c.charAt(0).toUpperCase() + c.slice(1);
	}

	// Step 2) Match and rank -----------------------------------------------------------------

	function tokenize(q) {
		return q.toLowerCase().split(/\s+/).filter(Boolean);
	}

	function countOf(hay, needle, cap) {
		var n = 0;
		var i = hay.indexOf(needle);
		while (i !== -1 && n < cap) {
			n++;
			i = hay.indexOf(needle, i + needle.length);
		}
		return n;
	}

	function search(sections, query) {
		var tokens = tokenize(query);
		if (!tokens.length) return [];
		var phrase = tokens.join(" ");
		var results = [];
		sections.forEach(function (s) {
			var score = 0;
			for (var i = 0; i < tokens.length; i++) {
				var t = tokens[i];
				var inTitle = s.lcTitle.indexOf(t) !== -1;
				var inHeading = s.lcHeading.indexOf(t) !== -1;
				var inText = countOf(s.lcText, t, 5);
				if (!inTitle && !inHeading && !inText) return; // every word must appear
				score += (inTitle ? 8 : 0) + (inHeading ? 4 : 0) + inText;
			}
			// the page itself is the best answer when the query names it
			if (!s.heading && s.lcTitle.indexOf(phrase) !== -1) score += 10;
			if (tokens.length > 1) {
				if (s.lcHeading.indexOf(phrase) !== -1 || s.lcTitle.indexOf(phrase) !== -1) score += 6;
				else if (s.lcText.indexOf(phrase) !== -1) score += 3;
			}
			results.push({ section: s, score: score * s.weight });
		});
		results.sort(function (a, b) {
			return b.score - a.score;
		});
		return results.map(function (r) {
			return r.section;
		});
	}

	// Step 3) Render -------------------------------------------------------------------------

	function escapeRegExp(s) {
		return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
	}

	// Append text to parent with every query word wrapped in <mark>. Built with text nodes,
	// never innerHTML, so nothing typed in the box can inject markup.
	function appendHighlighted(parent, text, tokens) {
		if (!tokens.length) {
			parent.appendChild(document.createTextNode(text));
			return;
		}
		var re = new RegExp("(" + tokens.map(escapeRegExp).join("|") + ")", "gi");
		var last = 0;
		var m;
		while ((m = re.exec(text)) !== null) {
			if (m.index > last) parent.appendChild(document.createTextNode(text.slice(last, m.index)));
			var mark = document.createElement("mark");
			mark.textContent = m[0];
			parent.appendChild(mark);
			last = m.index + m[0].length;
		}
		if (last < text.length) parent.appendChild(document.createTextNode(text.slice(last)));
	}

	function snippetOf(section, tokens, length) {
		var text = section.text;
		if (!text) return "";
		var first = -1;
		tokens.forEach(function (t) {
			var i = section.lcText.indexOf(t);
			if (i !== -1 && (first === -1 || i < first)) first = i;
		});
		var start = Math.max(0, first - Math.floor(length / 3));
		if (start > 0) {
			var space = text.indexOf(" ", start);
			if (space !== -1 && space < first) start = space + 1;
		}
		var end = Math.min(text.length, start + length);
		return (start > 0 ? "…" : "") + text.slice(start, end) + (end < text.length ? "…" : "");
	}

	function resultLink(section, tokens, snippetLength) {
		var a = document.createElement("a");
		a.className = "kds-result";
		a.href = section.url;

		var title = document.createElement("span");
		title.className = "kds-result-title";
		appendHighlighted(title, section.pageTitle + (section.heading ? " › " + section.heading : ""), tokens);
		a.appendChild(title);

		if (section.category) {
			var cat = document.createElement("span");
			cat.className = "kds-result-category";
			cat.textContent = section.category;
			a.appendChild(cat);
		}

		var snippet = snippetOf(section, tokens, snippetLength);
		if (snippet) {
			var p = document.createElement("span");
			p.className = "kds-result-snippet";
			appendHighlighted(p, snippet, tokens);
			a.appendChild(p);
		}
		return a;
	}

	// The same format as Kirra's in-app bug report and feature request emails
	// (src/dialog/popups/info/InfoDialogs.js), so this inbox sees one consistent shape.
	function requestMailto(query) {
		var subject = "📖 Kirra Documentation Request - " + query;
		var body =
			"╔═══════════════════════════════════════════════════════════════╗\n" +
			"║              📖 KIRRA DOCUMENTATION REQUEST 📖                ║\n" +
			"╚═══════════════════════════════════════════════════════════════╝\n\n" +
			"🔍 Searched for: " + query + "\n" +
			"📄 Page: " + location.href + "\n" +
			"📅 Date: " + new Date().toLocaleString() + "\n\n" +
			"┌───────────────────────────────────────────────────────────────┐\n" +
			"│ 📝 WHAT DO YOU NEED HELP WITH?                                 │\n" +
			"└───────────────────────────────────────────────────────────────┘\n" +
			"[Describe the task or feature you were looking for help on]\n\n\n\n" +
			"━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n" +
			"Thank you for helping make the Kirra docs better! 🚀\n" +
			"━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
		return "mailto:" + REQUEST_EMAIL + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
	}

	function emptyState(query) {
		var div = document.createElement("div");
		div.className = "kds-empty";
		var p = document.createElement("p");
		p.textContent = "No help pages match “" + query + "”.";
		div.appendChild(p);
		var a = document.createElement("a");
		a.className = "kds-request";
		a.href = requestMailto(query);
		a.textContent = "Request help on this topic";
		div.appendChild(a);
		var note = document.createElement("p");
		note.className = "kds-request-note";
		note.textContent = "Opens an email to " + REQUEST_EMAIL + " so the topic can be written up.";
		div.appendChild(note);
		return div;
	}

	function message(text) {
		var p = document.createElement("p");
		p.className = "kds-message";
		p.textContent = text;
		return p;
	}

	function searchPageUrl(query) {
		return BASE + "search.html?q=" + encodeURIComponent(query);
	}

	// Step 4) The header box on every page ---------------------------------------------------

	function initHeaderBox() {
		var siteTitle = document.querySelector(".markdown-body > h1:first-child");
		if (!siteTitle) return;

		var wrap = document.createElement("div");
		wrap.className = "kds-header";
		var form = document.createElement("form");
		form.className = "kds-form";
		form.setAttribute("role", "search");
		form.action = BASE + "search.html";
		var input = document.createElement("input");
		input.type = "search";
		input.name = "q";
		input.className = "kds-input";
		input.placeholder = "Search the docs…  (press /)";
		input.setAttribute("aria-label", "Search the docs");
		input.autocomplete = "off";
		var panel = document.createElement("div");
		panel.className = "kds-dropdown";
		panel.hidden = true;
		form.appendChild(input);
		form.appendChild(panel);
		wrap.appendChild(form);
		siteTitle.parentNode.insertBefore(wrap, siteTitle.nextSibling);

		var active = -1;
		var latest = 0;

		function links() {
			return panel.querySelectorAll("a.kds-result, a.kds-all");
		}

		function setActive(i) {
			var all = links();
			if (!all.length) return;
			active = (i + all.length) % all.length;
			Array.prototype.forEach.call(all, function (a, j) {
				a.classList.toggle("kds-active", j === active);
			});
			all[active].scrollIntoView({ block: "nearest" });
		}

		function close() {
			panel.hidden = true;
			active = -1;
		}

		function run() {
			var query = input.value.trim();
			var ticket = ++latest;
			if (!query) return close();
			panel.hidden = false;
			if (!panel.firstChild) panel.appendChild(message("Loading the search index…"));
			loadSections().then(
				function (sections) {
					if (ticket !== latest) return; // a newer keystroke has taken over
					var tokens = tokenize(query);
					var results = search(sections, query);
					panel.textContent = "";
					active = -1;
					if (!results.length) {
						panel.appendChild(emptyState(query));
						return;
					}
					results.slice(0, DROPDOWN_LIMIT).forEach(function (s) {
						panel.appendChild(resultLink(s, tokens, 110));
					});
					var all = document.createElement("a");
					all.className = "kds-all";
					all.href = searchPageUrl(query);
					all.textContent =
						results.length > DROPDOWN_LIMIT
							? "See all " + results.length + " results →"
							: "Open in the search page →";
					panel.appendChild(all);
				},
				function () {
					if (ticket !== latest) return;
					panel.textContent = "";
					panel.appendChild(message("Search is unavailable right now. Try again in a moment."));
				}
			);
		}

		input.addEventListener("input", run);
		input.addEventListener("focus", function () {
			loadSections();
			if (input.value.trim()) run();
		});
		input.addEventListener("keydown", function (e) {
			if (e.key === "ArrowDown") {
				e.preventDefault();
				setActive(active + 1);
			} else if (e.key === "ArrowUp") {
				e.preventDefault();
				setActive(active - 1);
			} else if (e.key === "Enter") {
				var all = links();
				if (active >= 0 && all[active]) {
					e.preventDefault();
					location.href = all[active].href;
				}
				// otherwise the form submits to the search page
			} else if (e.key === "Escape") {
				close();
				input.blur();
			}
		});
		document.addEventListener("click", function (e) {
			if (!wrap.contains(e.target)) close();
		});
		document.addEventListener("keydown", function (e) {
			if (e.key !== "/" || e.ctrlKey || e.metaKey || e.altKey) return;
			var t = e.target;
			if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
			e.preventDefault();
			input.focus();
		});
	}

	// Step 5) The full results page (search.html) --------------------------------------------

	function initSearchPage(root) {
		var input = root.querySelector(".kds-page-input");
		var status = root.querySelector(".kds-page-status");
		var list = root.querySelector(".kds-page-results");
		var latest = 0;

		function run() {
			var query = input.value.trim();
			var ticket = ++latest;
			history.replaceState(null, "", query ? searchPageUrl(query) : BASE + "search.html");
			list.textContent = "";
			if (!query) {
				status.textContent = "";
				return;
			}
			status.textContent = "Searching…";
			loadSections().then(
				function (sections) {
					if (ticket !== latest) return;
					var tokens = tokenize(query);
					var results = search(sections, query);
					list.textContent = "";
					if (!results.length) {
						status.textContent = "";
						list.appendChild(emptyState(query));
						return;
					}
					status.textContent = results.length + (results.length === 1 ? " result" : " results");
					results.forEach(function (s) {
						list.appendChild(resultLink(s, tokens, 240));
					});
				},
				function () {
					if (ticket !== latest) return;
					status.textContent = "Search is unavailable right now. Try again in a moment.";
				}
			);
		}

		input.value = new URLSearchParams(location.search).get("q") || "";
		input.addEventListener("input", run);
		root.querySelector("form").addEventListener("submit", function (e) {
			e.preventDefault();
			run();
		});
		input.focus();
		run();
	}

	function init() {
		var page = document.getElementById("kirra-search-page");
		if (page) initSearchPage(page);
		else initHeaderBox();
	}

	if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
	else init();
})();
