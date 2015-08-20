var toStream = require('./');
var assert = require('assert');
var isStream = require('isstream');
var Readable = require('stream').Readable;

describe('tostream', function() {
  
  it('should convert string to stream', function(done) {
    var stream = toStream('hello');
    assert(isStream(stream));
    
    stream.on('data', function(chunk) {
      assert.equal(chunk.toString(), 'hello');
      done();
    });
  });
  
  it('should convert buffer to stream', function(done) {
    var stream = toStream(new Buffer('hello'));
    assert(isStream(stream));
    
    stream.on('data', function(chunk) {
      assert.equal(chunk.toString(), 'hello');
      done();
    });
  });
  
  it('should return stream as is', function() {
    var stream = new Readable();
    assert.equal(toStream(stream), stream);
  });
});