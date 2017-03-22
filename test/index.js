/**
 * Imports
 */

var union = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.deepEqual(union([1, 2], [2, 3, 4]), [1, 2, 3, 4])
  t.deepEqual(union([{a: 1}, {a: 2}], [{a: 2}, {a: 3}], (a, b) => a.a === b.a), [{a: 1}, {a: 2}, {a: 3}])

  t.end()
})
