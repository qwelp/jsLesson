const returnFirstArgument = arg => arg;

const sumWithDefaults = (a, b = 100) => a + b;

const returnFnResult = fn => fn();

const returnCounter = (number = 0) => () => number++;

function returnArgumentsArray() {
    let arg = [];
    for (let i = 0; i < arguments.length; ++i) {
        arg.push(arguments[i]);
    }
    return arg;
}

const bindFunction = (fn, ...args) => fn(...args);