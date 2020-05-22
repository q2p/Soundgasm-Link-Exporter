// ==UserScript==
// @name         Soundgasm.net Downloader
// @description  This is a simple script that shows you direct a link to audio file that you want to download.
// @author       q2p
// @namespace    q2p
// @version      0.3
// @include      https://soundgasm.net/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
	'use strict';
	window.addEventListener("load", () => {
		if (!document.getElementById("jquery_jplayer_1")) {
			return;
		}
		const interval = setInterval(() => {
			const src_el = document.getElementById("jp_audio_0");
			const title_el = document.getElementsByClassName("jp-title");
			if (src_el && title_el && title_el.length !== 0) {
				const src = src_el.src;
				const title = title_el[0].textContent;
				if (src && src.length > 4 && title) {
					clearInterval(interval);
					const link = document.createElement("a");
					link.href = src;
					link.download = title+".m4a";
					link.textContent = "Download Link";
					document.body.appendChild(link);
				}
			}
		}, 200);
	});
})();
