const { portfolioCardData } = require("./data");

let i = 1000

exports.getAll = () => {
  return portfolioCardData;
};

exports.post = (etc, img, link, paragraph, title) => {
  const newPortfolio = {
    etc, img, link, paragraph, title, id: i++
  }
  return newPortfolio
}
exports.getById = (id) => {
  return portfolioCardData.find((p) => p.id === parseInt(id));
};
exports.putById = (id, img, etc, link, paragraph, title) => {
  return { id, img, etc, link, paragraph, title }
}

exports.postEtc = (id, value) => {
  const newPortfolio = portfolioCardData.find((p) => p.id === parseInt(id))
  newPortfolio.etc.push({ value, id: i++ })

  return newPortfolio
}
exports.putEtcById = (id, etcId, value) => {

  let newPortfolio = portfolioCardData.find((p) => p.id === parseInt(id))
  let newEtc = newPortfolio.etc.find((p) => p.id === parseInt(etcId))
  newEtc.value = value
  newPortfolio.etc = newEtc
  return newPortfolio
}

