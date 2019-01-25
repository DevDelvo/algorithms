// Make a function that returns a function and executes it after a set amount of time

function debounce (fn, delay) {
    let timeOut;
    return function(...args) {
        clearInterval(timeOut);
        timeOut = setTimeout(() => {
            fn(...args);
        }, delay);
    }
}

const add = (num1, num2) => console.log(num1 + num2);
const sayHi = () => console.log("hi!!!");

const addDelay = debounce(add, 5000);
const sayHiDelay = debounce(sayHi, 1000);
console.log(addDelay(5, 10));
console.log(sayHiDelay());

