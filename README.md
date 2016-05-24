# grange

Generate all sorts of values based on a range of numbers, e.g:

```js
const [...foo] = grange(3, 6); // [3,4,5,6]
```

## Status

An example library for ["Learn JavaScript with Eric Elliott"](http://ericelliottjs.com/product/lifetime-access-pass/). Not production tested.


## Getting Started

This library requires a JavaScript engine with ES6 generator support. Works great with Node v6.

```sh
npm install --save grange
```

## API

```js
grange(start?: Number, end: Number, transform?: Function, options: {
  step: Number,
  loop: Boolean
}) => Iterator
```

```js
// Create a simple range from start to end, inclusive
const [...foo] = grange(3, 6); // [3, 4, 5, 6]

// Increment by 2 instead of 1
const [...bar] = grange(2, 6, {step: 2}); // [2, 4, 6]

// Transform the output numbers with a transform function
const [...baz] = grange(1, 3, n => n * 2); // [2, 4, 6]

// Reverse the range by passing a larger value into the start position
const [...bif] = grange(3, 1); // [3, 2, 1]

// Create recurring loops
const loopGen = grange(1, 3, {loop: true});
const loop = range(0, 7).map(() => loopGen.next().value); // [1, 2, 3, 1, 2, 3, 1, 2]

// Start can be omitted -- defaults to 0
const [...omittedStart] = grange(6, n => n * 2, {step: 2}); // [0, 4, 8, 12]
```


Written for Learn JavaScript with Eric Elliott
==============================================
<a href="https://ericelliottjs.com"><img width="1200" alt="eejs-screenshot" src="https://cloud.githubusercontent.com/assets/364727/8640836/76d86618-28c3-11e5-8b6e-27d9cd72180e.png"></a>

[![Join the chat at https://gitter.im/learn-javascript-courses/javascript-questions](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/learn-javascript-courses/javascript-questions?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

An online course series for application developers. Ready to jump in? [Learn more](https://ericelliottjs.com/).
