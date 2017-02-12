const uuid = require('uuid/v4');
const {wrap} = require('../util/hooks');

module.exports = wrap(() => {
    return uuid();
});
