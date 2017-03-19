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

function serveCustomer() {
    let getDrinkOrderFunctionFirstClass = createDrinkOrder({class: "firstclass"});
    getDrinkOrderFunctionFirstClass();
    let getDrinkOrderFunctionSecondClass = createDrinkOrder({class: "second"});
    getDrinkOrderFunctionSecondClass();
}

function servePassengers() {
        serveCustomer();

}

function passengersListByClass(passengers, config) {
    let passengersClass= [];
    for (let i=0; i < passengers.length; i++) {
        if (passengers[i].ticket === config.ticket) {
            passengersClass.push(passengers[i]);
        }
    }
    return passengersClass;
}

let firstClassPassengers = passengersListByClass(passengers, {ticket: "firstclass"});
console.log(firstClassPassengers);



function createDrinkOrder(config) {
    let orderFunction;

    if (config.class === "firstclass") {
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
