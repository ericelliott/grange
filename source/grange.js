function* grange (start, end, transform, options) {
  if (typeof end !== 'number') {
    [ options, transform, end, start ] =
      [ transform, end, start, 0];
  }

  const shouldTransform = typeof transform === 'function';
  if (!shouldTransform) options = transform;

  const {
    step = 1,
    loop
  } = options || {};

  if (start > end) {
    for (let i = start; i >= end; i -= step) {
      yield shouldTransform ? transform(i) : i;
      if (i <= end && loop === true) i = start + step;
    }
    return;
  }

  for (let i = start; i <= end; i += step) {
    yield shouldTransform ? transform(i) : i;
    if (i >= end && loop === true) i = start - step;
  }
}

module.exports = grange;
