# request-robots
> An express.js middleware for handling noisy robots.txt

[![Release][release-image]][release-url]
[![npm version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]

Modern browsers usually asks for robots of the website. Having a robots in a Web page is a good thing (normally). 

However it is not always desired and sometime developers need a way to avoid the extra payload. 

Nice way to handle that is to send 204 status code for `/robots.txt` requests.

## Install

```sh
npm install request-robots
```

## Example

```javascript
const express = require('express');
const robots = require('request-robots');

const app = express();
app.use(robots());

// Add your routes here, etc.

app.listen(3000);
```

## License

[MIT](LICENSE)

[release-image]: https://img.shields.io/github/release/honzahommer/request-robots.svg
[release-url]: https://github.com/honzahommer/request-robots/releases/latest
[npm-image]: https://img.shields.io/npm/v/serve-robots.svg
[npm-url]: https://npmjs.org/package/serve-robots
[travis-image]: https://img.shields.io/travis/honzahommer/request-robots/master.svg
[travis-url]: https://travis-ci.org/honzahommer/request-robots
