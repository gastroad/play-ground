const { portfolioCardData } = require("./data");

exports.getAll = () => {
  return portfolioCardData;
};

exports.getById = (id) => {
  return portfolioCardData.find((p) => p.id === parseInt(id));
};
