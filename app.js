// console.log(__dirname);
// console.log(__filename);
// console.log(module);
// console.log(process);

// setInterval(() => {
// 	console.log('hello world');
// }, 1000);

const _ = require('lodash');

const items = [1,[2,[3,[4]]]];

const newItems = _.flattenDeep(items);
console.log(newItems);