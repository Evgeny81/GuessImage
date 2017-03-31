/**
 * Created by evgenykuznetsov on 30.03.17.
 */


let dj ={
    playsound: function () {
        console.log("Playing " , this.sound);
    },
    sound: "bells"
};

let controller = {
    timer: null,
    start: function () {
        this.timer = setInterval(dj.playsound.bind(dj), 1000);
    },
    stop: function () {
        clearInterval(this.timer);
    }
};

controller.start();

function testThis() {
    console.log("This is: ", this);
}
let dog = {
    name: "Fido"
};

let newFunction = testThis.bind(dog);
newFunction();