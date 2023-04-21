const portfolioService = require("./portfolio.service");

exports.getAll = (req, res) => {
  const portfolios = portfolioService.getAll();
  res.json(portfolios);
};

exports.getById = (req, res) => {
  const { id } = req.params;
  const portfolio = portfolioService.getById(id);
  res.json(portfolio);
};
