/* eslint-disable no-var, func-names, prefer-arrow-callback */
var path = require('path');
var jsonFile = path.join(__dirname, './data/schema.json');

module.exports = require('babel-relay-plugin')(require(jsonFile).data);

