// ==UserScript==
// @name         Soundgasm.net Link Exporter
// @description  This is a simple script that shows you direct a link to audio file that you want to download.
// @author       q2p
// @namespace    q2p
// @version      0.2
// @include      https://soundgasm.net/*
// @grant        none
// ==/UserScript==

(function() {
	'use strict';

	function gn() {
		const src_el = document.getElementById("jp_audio_0");
        const title_el = document.getElementsByClassName("jp-title");
		if (src_el && title_el && title_el.length !== 0) {
			const src = src_el.src;
            const title = title_el[0].textContent;
			if (src && src.length > 4 && title) {
                const filename = title+".m4a";
				const anc = document.createElement("a");
				anc.href = src;
                anc.download = filename;
				anc.textContent = "Save As ("+src+")";
				document.body.appendChild(anc);
				return;
			}
		}
		setTimeout(gn, 200);
	}

	gn();
})();
