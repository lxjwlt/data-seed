'use strict';

function random () {

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
    start = Math.max(start.charCodeAt(), 'a'.charCodeAt());
    end = Math.min(end.charCodeAt(), 'z'.charCodeAt());

    return String.fromCharCode(random.int(start, end));
};

module.exports = random;
