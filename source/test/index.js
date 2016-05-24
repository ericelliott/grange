const test = require('tape');
const grange = require('../grange');

const range = (start, end) =>
  Array.from({ length: end - start + 1}, (x, i) => i++);

test('simple number range', assert => {
  const msg = 'should produce a simple range';

  const [...actual] = grange(3, 6);
  const expected = [3, 4, 5, 6];

  assert.same(actual, expected, msg);
  assert.end();
});

test('step', assert => {
  const msg = 'should obey step increment argument';

  const [...actual] = grange(2, 6, {step: 2});
  const expected = [2, 4, 6];

  assert.same(actual, expected, msg);
  assert.end();
});

test('transform', assert => {
  const msg = 'should use transform function if provided';

  const [...actual] = grange(1, 3, n => n * 2);
  const expected = [2, 4, 6];

  assert.same(actual, expected, msg);
  assert.end();
});

test('decrement', assert => {
  const msg = 'should decrement when start > end';

  const [...actual] = grange(3, 1);
  const expected = [3, 2, 1];

  assert.same(actual, expected, msg);
  assert.end();
});

test('loop', assert => {
  const msg = 'should loop over range when loop is true';

  const loopGen = grange(1, 3, {loop: true});
  const actual = range(0, 7).map(() => loopGen.next().value);
  const expected = [1, 2, 3, 1, 2, 3, 1, 2];

  assert.same(actual, expected, msg);
  assert.end();
});

test('loop', assert => {
  const msg = 'should loop over decrementing range';

  const loopGen = grange(3, 1, {loop: true});
  const actual = range(0, 7).map(() => loopGen.next().value);
  const expected = [3, 2, 1, 3, 2, 1, 3, 2];

  assert.same(actual, expected, msg);
  assert.end();
});
