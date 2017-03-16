/**
 * Created by evgenykuznetsov on 15.03.17.
 */

(function () {
    'use strict';
    window.onload = init;
    function init() {
        let images = document.getElementsByTagName('img');
        for (let i=0; i < images.length; i++) {
            images[i].onclick = showAnswer();
        }
    }
    function showAnswer() {
        let image = document.getElementById('zero');
        image.src = "./image/zero.jpg";
    }
}());

