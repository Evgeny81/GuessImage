/**
 * Created by evgenykuznetsov on 30.03.17.
 */


let dj ={
    playsound: function () {
        console.log("Playing " , this);
    },
    sound: "bells"
};

let controller = {
    start: function () {
        setInterval(dj.playsound, 1000);
    }
};



// controller.start();