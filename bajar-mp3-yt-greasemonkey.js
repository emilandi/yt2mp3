// ==UserScript==
// @name        Bajar MP3 YouTube
// @namespace   youtube.com
// @description Descarga MP3 desde YouTube con un solo clic
// @include     http://www.youtube.com/*
// @include     https://www.youtube.com/*
// @version     1.0.1
// @grant       none
// @require https://code.jquery.com/jquery-2.2.3.min.js
// ==/UserScript==

(function() {
    'use strict';

    $(document).ready(function() {
        crearboton();
    });
	
    function crearboton(){
        var elem = document.getElementById('watch-header');
        var btn = document.getElementById('idbtn');

        if (elem!==null && btn===null) {
            var url=window.location.href;
            var html='<iframe id="fr1" style="width:230px;height:60px;border:0;overflow:hidden;" scrolling="no" src="//www.youtubeinmp3.com/widget/button/?video=' + url + '">';
            var div = document.createElement('div');
            div.id='idbtn';
            div.innerHTML = html;
            elem.appendChild(div);
        }
    }

    document.addEventListener("mousemove", function() {
        var btn = document.getElementById('idbtn');
        if (btn===null){
            crearboton();
        }
    });

})();
