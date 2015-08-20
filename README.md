# tostream

Convert String or Buffer to Readable Stream. Returns input as-is if it's a stream.

### Installation

     $ npm install tostream --save

### Usage

```javascript
var toStream = require('tostream');

toStream('hello').pipe(process.stdout);
toStream(new Buffer('hello')).pipe(process.stdout);

var Readable = require('stream').Readable;
var stream = new Readable();

toStream(stream) === stream;
```

### Development

    $ git clone git@github.com:seedalpha/tostream.git
    $ cd tostream
    $ npm install
    $ npm test

### Author

Vladimir Popov <vlad@seedalpha.net>

### License

MIT