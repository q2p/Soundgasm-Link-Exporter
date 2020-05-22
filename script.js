// ==UserScript==
// @name    Soundgasm Link Exporter
// @version 0.1
// @include https://soundgasm.net/*
// @grant   none
// ==/UserScript==

(function() {
	'use strict';

	function gn() {
		const el = document.getElementById("jp_audio_0");
		if (el) {
			const src = el.src;
			if (src && src.length > 4) {
				const anc = document.createElement("a");
				anc.href = src;
				anc.textContent = src;
				document.body.appendChild(anc);
				return;
			}
		}
		setTimeout(gn, 200);
	};

	gn();
})();
