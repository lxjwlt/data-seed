'use strict';

const random = require('./random');

class gather {
    constructor (data) {
        let self = this;

        data = JSON.parse(JSON.stringify(data));

        data = unique(data);

        self.originData = data;

        self.isObject = typeof data === 'object' && data && !Array.isArray(data);

        if (Array.isArray(data)) {
            self.data = data;

        } else if (self.isObject) {
            self.data = Object.keys(data);

        } else {
            self.data = [data];
        }

        self.length = self.data.length;

        self.restore();
    }

    next () {
        let self = this;

        if (!self.currentData.length) {
            self.restore();
            return;
        }

        let item = random.array(self.currentData);

        let index = self.currentData.indexOf(item);

        self.currentData.splice(index, 1);

        return self.isObject ? {
            [item]: self.originData[item]
        } : item;
    }

    restore () {
        let self = this;

        self.currentData = JSON.parse(JSON.stringify(self.data));
    }

    [Symbol.iterator] () {
        let self = this;

        return {
            next() {
                return { done: !self.currentData.length, value: self.next() }
            }
        }
    }
}

function unique (arr) {
    if (!Array.isArray(arr)) {
        return arr;
    }

    let set = new Set();

    for (let item of arr) {
        set.add(item);
    }

    return Array.from(set.values());
}

module.exports = (data) => {
    return new gather(data);
};
