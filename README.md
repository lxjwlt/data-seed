# data-seed

![Node version][node-image] [![NPM version][npm-image]][npm-url]

Fake data generator for js develop.

## when to use?

When we are developing, we need mock data to simulate the process of online requests, which are random, readable, safe, or even illegal.

## Install

```
npm install data-seed
```

## Usage

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

## Utils

### `util.deep`

`util.deep` accepts a callback function which will return data.

The callback function accepts 4 arguments:

- `DEEP`: identify data loop
- `DONE`: return `DONE` will stop loop
- `level`: record the deep level of data
- `isFirst`: whether first data

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

### `util.random`

- `util.random.float([min = 0, max = 1])`: create a float number randomly.
- `util.random.int([min=0, max=1])`: create a integer number randomly.
- `util.random.letter([min='a', max='z'])`: create a letter randomly.
- `util.random.array(arr)`: return a item within the array randomly.
- `util.random.one([...])`: return a item from arguments randomly.

### `util.arr(num, callback)`

Callback function return element of array:

```javascript
const {util: {arr}} = require('data-seed');

arr(2, (i) => i); // [0, 1]
arr(2, 10); // [10, 10]
```

### `util.gather(data)`

```javascript
const {util: {gather}} = require('data-seed');

let list = gather([1, 2, 3]);

let item1 = list.next(); // one of [1, 2, 3] randomly
let item2 = list.next(); // one of [1, 2, 3] randomly
let item3 = list.next(); // one of [1, 2, 3] randomly

item1 !== item2; // true
item2 !== item3; // true
item1 !== item3; // true

list.next(); // undefined
```

And support iterator:

```javascript
for (let value of gather([1, 2, 3])) {
    value; // one of [1, 2, 3] randomly
}
```

## Seeds

- `seed.color()`: return a safe web color randomly. like `DarkGreen`
- `seed.date([start=0, end=Date.now()])`: return timestamp randomly.
    - `seed.date.toSecond([start=0, end=Date.now()])`: return timestamp in seconds.
    - `seed.date.format(format[, start, end])`: return formatted date time. see [momentJS#format](http://momentjs.com/docs/#/displaying/format/)
- `seed.email()`: return email randomly.
- `seed.file()`: return file name randomly. like filename.jpg
    - `seed.file.extension()`: return file extension randomly.
- `seed.hexColor()`: return color hex value randomly. like `#c9c9c9`
    - `seed.hexColor.short()`: return short color hex value randomly. like `#666`
- `seed.img()`: return a img url randomly.
    - `seed.img.base64()`: return a img base64 string randomly.
    - `seed.img.dummy([width, height, background, color])`: return a dummy url, eg. https://dummyimage.com/697x903.png/000/45cb91.
- `seed.ip4()`: return ip4 address randomly.
    - `seed.ip4.cidr()`: return ip4 cidr address, like `1.1.1.1/24`
    - `seed.ip4.mask([start=1, end=32])`: return ip4 mask, like `255.255.0.0`
    - `seed.ip4.mask.binary([start=1, end=32])`: return ip4 mask in binary
- `seed.ip6()`: return ip6 address randomly.
    - `seed.ip6.cidr()`: return ip6 cidr address, like `65ef:57bd:f2f0:5688:8491:7713:e37a:9dc5/110`
    - `seed.ip6.mask([start=1, end=128])`: return ip6 mask, like `ffff:ffff:0:0:0:0:0:0`
    - `seed.ip6.mask.binary([start=1, end=128])`: return ip6 mask in binary
- `seed.isbn(version)`: return an isbn string randomly. (version 10 or 13)
- `seed.lorem([min=1, max=5])`: return lorem text randomly.
- `seed.mac()`: return mac address randomly.
- `seed.md5()`: return md5 string randomly.
- `seed.mimeType()`: return MIME Type randomly.
- `seed.paragraph([min=1, max=10])`: return paragraph text randomly.
- `seed.time([hourType=24])`: return time randomly, eg. `13:17` in default, `1:17 PM` when `hourType=12`
- `seed.url([options = {protocol:true, host: true, path: true, query: true}])`: return a url randomly.
    - `seed.url.protocol`: return url protocol randomly, like http, file, ftp.
    - `seed.url.host`: return url host randomly.
    - `seed.url.domain`: return top level domain randomly, like com, net.
    - `seed.url.path`: return url path randomly.
    - `seed.url.query`: return url query string randomly.
- `seed.uuid()`: return uuid.
- `seed.word([min=1, max=10])`: return a word randomly.
- `seed.xss()`: return xss script, eg. `<script>alert("xss");</script>`
    - `seed.xss.noStrict()`: return html text, eg. `<a href="javascript:void(0)">click me!</a>`

## custom seed

```javascript
const dataSeed = require('data-seed');

dataSeed.register('sum', (a, b) => {
    return a + b;
});

dataSeed.seed.sum(1, 2); // 3
```

## hook

Add hook to override data:

```javascript
const dataSeed = require('data-seed');

dataSeed.hook(() => {
    return dataSeed.seed.xss();
});

dataSeed.seed.ip4(); // xss string
dataSeed.seed.ip4.cidr(); // xss string
dataSeed.seed.lorem(); // xss string
```

[npm-url]: https://www.npmjs.com/package/data-seed
[npm-image]: https://img.shields.io/npm/v/data-seed.svg

[node-image]: https://img.shields.io/node/v/data-seed.svg
