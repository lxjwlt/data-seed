`use strict`;

module.exports = (count, callback) => {
    return Array.from(Array(count)).map((value, i) => {
        return typeof callback === 'function' ? callback(i) : callback;
    });
};
