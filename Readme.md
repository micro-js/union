
# union

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Compute the union of two arrays

## Installation

    $ npm install @f/union

## Usage

```js
var union = require('@f/union')

union([1, 2], [2, 3, 4]) // -> [1, 2, 3, 4]
```

## API

### union(a, b, cmp?)

- `a` - First array
- `b` - Second array
- `cmp` - Optional. Comparator to use to reduce the joined array to its unique values.

**Returns:** Returns the logical union of the two arrays. That is, each unique element in either array, exactly once.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/union.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/union
[git-image]: https://img.shields.io/github/tag/micro-js/union.svg?style=flat-square
[git-url]: https://github.com/micro-js/union
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/union.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/union
