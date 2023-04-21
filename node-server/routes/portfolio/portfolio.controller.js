const portfolioService = require("./portfolio.service");

exports.getAll = (req, res) => {
  const portfolios = portfolioService.getAll();
  res.json(portfolios);
};
exports.post = (req, res) => {
  const { img, etc, link, paragraph, title, } = req.body
  const portfolio = portfolioService.post(etc, img, link, paragraph, title)
  res.json(portfolio)
}

exports.getById = (req, res) => {
  const { id } = req.params;
  const portfolio = portfolioService.getById(id);
  res.json(portfolio);
};

exports.putById = (req, res) => {
  const { img, etc, link, paragraph, title, } = req.body
  const { id } = req.params;
  const portfolio = portfolioService.putById(id, img, etc, link, paragraph, title)
  res.json(portfolio)
}

exports.postEtc = (req, res) => {
  const { id } = req.params;
  const { value } = req.body;
  const portfolio = portfolioService.postEtc(id, value)
  res.json(portfolio)
}
exports.putEtcById = (req, res) => {
  const { id, etcId } = req.params;
  const { value } = req.body;
  const portfolio = portfolioService.putEtcById(id, etcId, value)
  res.json(portfolio)
}
