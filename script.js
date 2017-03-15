/**
 * Created by evgenykuznetsov on 15.03.17.
 */

(function () {
    'use strict';
    window.onload = init;
    function init() {
        let image = document.getElementById('zero');
        image.onclick = showAnswer;
    }
    function showAnswer() {
        let image = document.getElementById('zero');
        image.src = "./image/zero.jpg";
    }
}());

