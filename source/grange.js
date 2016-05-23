function* grange (start, end, transform, options) {

  const shouldTransform = typeof transform === 'function';
  if (!shouldTransform) options = transform;

  const { step = 1 } = options || {};

  if (start > end) {
    for (let i = start; i >= end; i -= step) {
      yield shouldTransform ? transform(i) : i;
    }
    return;
  }

  for (let i = start; i <= end; i += step) {
    yield shouldTransform ? transform(i) : i;
  }
}

module.exports = grange;
