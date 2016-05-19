```js
const [...foo] = grange(3, 6); // [3,4,5,6]
const [...bar] = grange(2, 6, {step: 2}); // [2,4,6]
const [...baz] = grange(1, 3, n => n * 2); // [2,4,6]
const [...bif] = grange(3, 1); // [3,2,1]
const [...loop] = grange(1, 3, {loop: true}); // [1,2,3,1,2,3,1,2...]
const [...end] = grange(3, n => n * 2, {loop: true}); // [2,4,6,2,4,6,2,4...]
```
