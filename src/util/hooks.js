'use strict';

let hooks = [];
let inHookRun = false;

function hookValue (initValue) {
    let value = initValue;

    inHookRun = true;

    for (let hook of hooks) {
        value = hook(value);
    }

    inHookRun = false;

    return value;
}

hookValue.set = (func) => {
    hooks.push(func);
};

hookValue.clear = () => {
    hooks.length = 0;
};

hookValue.wrap = (func) => {
    return function (...args) {
        let value = func(...args);
        return inHookRun ? value : hookValue(value);
    };
};

module.exports = hookValue;
