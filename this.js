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
    start: function () {
        let set = setInterval(dj.playsound.bind(dj), 1000);
        setTimeout(clearInterval(set), 5000);
    }
};

// controller.start();

function testThis() {
    console.log("This is: ", this);
}
let dog = {
    name: "Fido"
};

let newFunction = testThis.bind(dog);
newFunction();