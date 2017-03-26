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

    function Car(params) {
        this.make = params.make;
        this.model = params.model;
        this.year = params.year;
        this.color = params.color;
        this.passengers = params.passengers;
        this.convertible = params.convertible;
        this.mileage = params.mileage;
        this.started = params.started;
    }

    let chevy = new Car ({
        make: "Chevy",
        model: "Bel Air",
        year: 1957,
        color: "red",
        passengers: 2,
        convertible: false,
        mileage: 1021
    });

    Car.prototype.start = function () {
        this.started = true;
    };

    Car.prototype.stop = function () {
        this.started = false;
    };

    Car.prototype.drive = function () {
        if (this.started) {
            console.log(this.make + " " + this.model + " goes zoom zoom");
        } else {
            console.log("Start the engine first");
        }
    };

    chevy.start();
    chevy.drive();


}());