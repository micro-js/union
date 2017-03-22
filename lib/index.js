/**
 * Modules
 */

var unique = require('@f/unique')

/**
 * Expose union
 */

module.exports = union

/**
 * union
 */

function union (a, b, cmp) {
  return unique(a.concat(b), cmp)
}
