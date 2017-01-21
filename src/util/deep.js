
const DEEP = Symbol('deep');
const STOP = Symbol('stop');

function deep (generator, level = 0, index = 0, _data) {
    let isFirst = level === 0 && index === 0;
    let data = _data || generator(DEEP, STOP, level, isFirst);

    if (typeof data !== 'object') {
        return data;
    }

    if (Array.isArray(data)) {
        return data.map((item) => deep(generator, level, ++index, item));
    }

    for (let prop of Object.keys(data)) {

        if (data[prop] === DEEP) {
            data[prop] = deep(generator, level + 1, ++index);
        } else {
            data[prop] = deep(generator, level, ++index, data[prop]);
        }

        if (data[prop] === STOP) {
            delete data[prop];
        }
    }

    return data;
};

module.exports = (generator) => {
    return deep(generator);
};
