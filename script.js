// ==UserScript==
// @name         Soundgasm.net Link Exporter
// @description  This is a simple script that shows you direct a link to audio file that you want to download.
// @author       q2p
// @namespace    q2p
// @version      0.1
// @include      https://soundgasm.net/*
// @grant        none
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
	}

	gn();
})();
