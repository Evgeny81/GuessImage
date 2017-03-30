/**
 * Created by evgenykuznetsov on 29.03.17.
 */
(function () {
    "use strict";
    String.prototype.palindrome = function () {
        let reverseString = "";

        for (let i = this.length-1; i>=0; i--) {
            reverseString += this[i];

        }

        return (reverseString === this);
    };

    let mother = "mortom";

    console.log(mother.palindrome());


}());