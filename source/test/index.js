const test = require('tape');
const grange = require('../grange');

test('simple number range', assert => {
  const msg = 'should produce a simple range';

  const [...actual] = grange(3, 6);
  const expected = [3, 4, 5, 6];

  assert.same(actual, expected, msg);
  assert.end();
});
