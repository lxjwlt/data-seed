'use strict';

function random (str) {
    if (typeof str !== 'string') {
        return random.float(arguments[0], arguments[1]);
    }

    let strList = str.split('');

    strList = strList.map((char) => {
        switch (char) {
            case 'd':
                return random.int(0, 9);
            case 'w':
                return random.letter();
            default:
                return char;
        }
    });

    return strList.join('');
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

module.exports = random;
