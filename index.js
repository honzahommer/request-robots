module.exports = function () {
  return function (req, res, next) {
    req.url === '/robots.txt' ? res.sendStatus(204) : next();
  }
};
