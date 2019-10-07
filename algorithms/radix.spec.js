const tap = require('tap');
const radix = require('./radix.js');

tap.same(radix.getDigit(12345, 0), 5);
tap.same(radix.getDigit(12345, 1), 4);

tap.same(radix.sort([1, 2, 3, 4, 5, 6, 7, 8]), [1, 2, 3, 4, 5, 6, 7, 8]);
tap.same(radix.sort([999, 2345, 35556, 44, 25, 63, 77, 788]), [25, 44, 63, 77, 788, 999, 2345, 35556]);