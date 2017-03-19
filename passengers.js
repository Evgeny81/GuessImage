(function () {
    'use strict';
}());

let passengers = [
    {
        name: "Jane Doloop",
        paid: true,
        ticket: "coach"
    },
    {
        name: "Dr. Evel",
        paid: true,
        ticket: "firstclass"
    },
    {
        name: "Sue Property",
        paid: false,
        ticket: "firstclass"
    },
    {
        name: "John Funcall",
        paid: true,
        ticket: "coach"
    }
];

function checkNoFlyList(passenger) {
    return (passenger.name === "Dr. Evel");
}

function checkNotPaid(passenger) {
    return (!passenger.paid);
}

function printPassenger(passenger) {
    console.log("Passenger name: " + passenger.name + " Paid: " + passenger.paid);
}

function processPassengers(passengers, testFunction) {
    for (let i=0; i < passengers.length; i++) {
        if (testFunction(passengers[i])) {
            return false;
        }
    }
    return true;
}

function serveCustomer(passenger) {
    let getDrinkOrderFunction = createDrinkOrder(passenger);
    getDrinkOrderFunction();
}

function servePassengers(passengers) {
    for (let i=0; i < passengers.length; i++) {
        serveCustomer(passengers[i]);
    }
}

function createDrinkOrder(passenger) {
    let orderFunction;

    if (passenger.ticket === "firstclass") {
        orderFunction = function () {
            console.log("Would you like a cocktail or wine?");
        };
    } else {
        orderFunction = function () {
            console.log("Your choice is cola or water?");
        };
    }
    return orderFunction;
}

let allCanFly = processPassengers(passengers, checkNoFlyList);

if (!allCanFly) {
    console.log("The plane can't take off: we have a passenger on the no-fly-list");
}
let allPaid = processPassengers(passengers, checkNotPaid);

if (!allPaid) {
    console.log("The plane can't take off: not everyone has paid");
}

processPassengers(passengers, printPassenger);

servePassengers(passengers);
