/**
 * Module dependencies
 */

var isStream  = require('isstream');
var sts       = require('string-to-stream');

/**
 * Expose
 *
 * @param {String | Buffer | Stream} input
 * @return {Redable | Stream} readable stream or original stream
 * @throws On invalid input
 */

exports = module.exports = function tostream(input) {
  if (Buffer.isBuffer(input) || typeof input === 'string') {
    return sts(input);
  } else if (isStream(input)) {
    return input;
  } else {
    throw new Error('Input could only be String or Buffer or Stream');
  }
}
