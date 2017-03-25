/**
 * Created by evgenykuznetsov on 25.03.17.
 */


(function () {
    "use strict";
    function Coffee(roast, ounces) {
        this.roast = roast;
        this.ounces = ounces;
        this.getSize = function () {
            return this.ounces;

        };
        this.toString = function () {
            return "You ordered " + this.getSize() + " ounces " + this.roast + " coffee";
        };
    }

    let houseBlend = new Coffee("House Blend", 12);
    let darkRoast = new Coffee("Dark Roast", 16);

    console.log(houseBlend.toString());
    console.log(darkRoast.toString());
}());