/**
 * Created by evgenykuznetsov on 21.03.17.
 */

function makePassword(password) {
    return function guessPass(passwordGuess) {
        console.log(passwordGuess === password);
        return (passwordGuess === password);
    };
}

function multN(n) {
    return function mult(b) {
        console.log( n * b );
        return n * b;
    };
}

var password = makePassword("pass");
var guessPass = password("pss");
var mult = multN(3);
var guessPass = mult(1);
