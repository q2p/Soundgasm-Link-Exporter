// ==UserScript==
// @name         Soundgasm Link Exporter
// @version      0.1
// @include      https://soundgasm.net/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function gn() {
        let el = document.getElementById("jp_audio_0");
        if (el != undefined && el != null) {
            let src = el.src;
            if (src != undefined && src != null && src.length > 4) {
                var anc = document.createElement("a");
                anc.href = src;
                anc.innerText = src;
                document.body.append(anc);
                return;
            }
        }
        setTimeout(gn, 500);
    };

    gn();
})();
