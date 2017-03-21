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
function counter() {
    var count = 0;
    return {
        increment: function () {
            count++;
            return count;
        }
    };
}



var countNew = counter();
console.log(countNew());
console.log(countNew());
console.log(countNew());

