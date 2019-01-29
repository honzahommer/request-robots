module.exports = () => (req, res, next) =>
  req.url === '/robots.txt' ? res.sendStatus(204) : next();
