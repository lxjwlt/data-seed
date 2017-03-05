'use strict';

function random () {
    return random.float.apply(null, arguments);
}

random.float = (start=0, end=1) => {
    let startPoint = start;
    let endPoint = end;

    return Math.random() * (endPoint - startPoint) + startPoint;
};

random.int = (start = 0, end = 1) => {
    let startPoint = start - 1;
    let endPoint = end;

    return Math.ceil(Math.random() * (endPoint - startPoint) + startPoint);
};

random.letter = (start = 'a', end = 'z') => {
    let isUppercase = start.toUpperCase() === start && end.toUpperCase() === end;
    let startPoint = isUppercase ? 'A' : 'a';
    let endPoint = isUppercase ? 'Z' : 'z';

    if (!isUppercase) {
        start = start.toLowerCase();
        end = end.toLowerCase();
    }

    start = Math.max(start.charCodeAt(0), startPoint.charCodeAt(0));
    end = Math.min(end.charCodeAt(0), endPoint.charCodeAt(0));

    return String.fromCharCode(random.int(start, end));
};

random.array = (arr) => {
    if (!Array.isArray(arr)) {
        return [];
    }

    return arr[random.int(0, arr.length - 1)];
};

random.one = function () {
    return random.array(Array.from(arguments));
};

random.chance = function (config) {
    let keys = Object.keys(config);

    let pointList = [0];

    let proportion = keys.map((value, i) => {

        if (value.match(/%$/)) {
            value = parseFloat(value) / 100;
        } else {
            value = Number(value);
        }

        value = value || 0;

        pointList.push((pointList[i]) + value);

        return value;
    });

    let sum = proportion.reduce((last, cur) => last + cur);

    let randomValue = random.float(0, sum);

    let index = 0;

    for (; index < pointList.length; index++) {
        let next = pointList[index + 1] || Infinity;
        if (randomValue > pointList[index] && randomValue < next) {
            break;
        }
    }

    let targetValue = config[keys[index]];

    return typeof targetValue === 'function' ? targetValue() : targetValue;
};

module.exports = random;
