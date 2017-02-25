'use strict';

let hooks = [];
let inHookRun = false;

function hookValue (initValue, seedFunc) {
    let value = initValue;

    inHookRun = true;

    for (let item of hooks) {
        if (seedFunc && item.seed && seedFunc !== item.seed ||
            !seedFunc && item.seed) {
            continue;
        }
        value = item.hook(value);
    }

    inHookRun = false;

    return value;
}

hookValue.set = (seed, hook) => {
    if (typeof hook === 'undefined') {
        hook = seed;
        seed = null;
    }

    hooks.push({
        seed: seed,
        hook: hook
    });
};

hookValue.clear = () => {
    hooks.length = 0;
};

hookValue.wrap = (func) => {
    return function SeedFunc (...args) {
        let value = func(...args);
        return inHookRun ? value : hookValue(value, SeedFunc);
    };
};

module.exports = hookValue;
