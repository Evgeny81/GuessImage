/**
 * Created by evgenykuznetsov on 27.03.17.
 */

(function() {
    "use strict";
    function Robot(name, year, owner) {
        this.name = name;
        this.year = year;
        this.owner = owner;
    }

    Robot.prototype.maker = "ObjectsRUs";
    Robot.prototype.speak = function () {
        console.log("speak");
    };
    Robot.prototype.makeCoffee = function () {
        console.log("make coffee");
    };
    Robot.prototype.blinkLights = function () {
        console.log("blink lights");
    };

    let robby = new Robot("Robby", 1956, "Dr. Morbius");
    let rosie = new Robot("Rosie", 1962, "George Jetson");

    robby.onOffSwitch = true;
    robby.makeCoffee = function () {
        console.log("starbucks");
    };

    rosie.cleanHouse = function () {
        console.log("clean house");
    };

    console.log(robby.name + " was made " + robby.maker + " in " + robby.year + " and is owned by " + robby.owner);
    console.log(rosie.name + " was made " + rosie.maker + " in " + rosie.year + " and is owned by " + rosie.owner);

    robby.makeCoffee();
    robby.blinkLights();
    rosie.cleanHouse();

    function Game() {
        this.level = 0;
    }

    Game.prototype.play = function () {
        this.level++;
        console.log("Welcome to level " + this.level);
        this.unlock();
    };

    Game.prototype.unlock = function () {
        if (this.level>=42 && !Robot.prototype.deployLaser) {
            Robot.prototype.deployLaser = function () {
                console.log(this.name + " Laser");
            };
        }
    };

    let game = new Game();
    while (game.level < 42) {
        game.play();
    }

    robby.deployLaser();
    rosie.deployLaser();
}());