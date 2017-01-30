module.exports = (count, callback) => {
    return Array.from(Array(count)).map((value, i) => {
        return callback(i);
    });
};
