# data-seed

[![NPM version][npm-image]][npm-url]

Fake data generator for js develop.

# Install

```
npm install data-seed
```

# Usage

```javascript
const {util, seed} = require('data-seed');

// specific seed or util
const {
    util: {
        random
    },
    seed: {
        ip4
    }
} = require('data-seed');

seed.ip4(); // 23.4.126.0
ip4(); // 1.1.1.123
```

# Utils

## `util.deep`

`util.deep` accepts a callback function which will return data.

The callback function accepts 4 arguments:

- `DEEP`: identify data loop
- `DONE`: return `DONE` will stop loop
- `level`: record the deep level of data
- `isFirst`: record first data

Create a tree nodes:

```javascript
const {util: {deep}} = require('data-seed');

let data = deep((DEEP, DONE, level, isFirst) => {
    return level < 2 ? {
        name: 'lxjwlt',
        nodes: DEEP
    } : DONE;
});

/*
    data:
    {
        name: 'lxjwlt',
        nodes: {
            name: 'lxjwlt'
        }
    }
*/
```

## `util.random`

- `util.random.float([min = 0, max = 1])`: create a float number randomly.
- `util.random.int([min=0, max=1])`: create a integer number randomly.
- `util.random.letter([min='a', max='z'])`: create a letter randomly.
- `util.random.array(arr)`: pick a item within the array randomly.

# Seeds

- `seed.color()`: return a safe web color randomly.
- `seed.date([start='1970/1/1', end=Date.now()])`: return timestamp randomly.
    - `seed.date.format(format[, start, end])`: return formatted date time. see [momentJS#format](http://momentjs.com/docs/#/displaying/format/)
- `seed.email()`: return email randomly.
- `seed.hexColor()`: return color hex value randomly.
- `seed.ip4()`: return ip4 address randomly.
    - `seed.ip4.cidr()`: return ip4 cidr address, like 1.1.1.1/24
- `seed.lorem([min=1, max=5])`: return lorem text randomly.
- `seed.mac()`: return mac address randomly.
- `seed.paragraph([min=1, max=10])`: return paragraph text randomly.
- `seed.url([options = {protocol:true, host: true, path: true, query: true}])`: return a url randomly.
- `seed.uuid()`: return uuid.
- `seed.word([min=1, max=10])`: return a word randomly.
- `seed.xss()`: return xss script, eg. `<script>alert("xss");</script>`
