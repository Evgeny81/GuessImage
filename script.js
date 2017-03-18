/**
 * Created by evgenykuznetsov on 15.03.17.
 */

(function () {
    'use strict';
    window.onload = init;
    function init() {
        let images = document.getElementsByTagName('img');
        for (let i=0; i < images.length; i++) {
            images[i].onmouseover = showAnswer;
            images[i].onmouseout = reblur;
        }
    }
    function showAnswer(eventObj) {
        let image = eventObj.target;
        let name = image.id;
        image.src = "./image/" + name + ".jpg";
    }

    function reblur(eventObj) {
        let image = eventObj.target;
        let name = image.id;
        image.src = "./image/" + name + "blur.jpg";

    }
}());

