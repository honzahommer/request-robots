# request-robots

[![npm version][npm-image]][npm-url]
[![npm download][downloads-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Greenkeeper badge](https://badges.greenkeeper.io/honzahommer/request-robots.svg)](https://greenkeeper.io/)

> An express.js middleware for handling noisy robots.ico

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

[npm-image]: https://img.shields.io/npm/v/request-robots.svg
[npm-url]: https://npmjs.org/package/request-robots
[travis-image]: https://img.shields.io/travis/honzahommer/request-robots/master.svg
[travis-url]: https://travis-ci.org/honzahommer/request-robots
[downloads-image]: https://img.shields.io/npm/dm/request-robots.svg
