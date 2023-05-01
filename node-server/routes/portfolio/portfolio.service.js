const path = require('path');
const fs = require('fs');

const dataFilePath = path.resolve(__dirname, 'data.json');

exports.getAll = () => {
  const portfolio = JSON.parse(fs.readFileSync(dataFilePath));
  return portfolio;
};

exports.post = (etc, img, link, paragraph, title) => {
  const portfolio = JSON.parse(fs.readFileSync(dataFilePath));
  const newPortfolio = {
    etc, img, link, paragraph, title, id: portfolio.portfolio.length + 1
  }
  portfolio.portfolio.push(newPortfolio)
  fs.writeFileSync(dataFilePath, JSON.stringify(portfolio));
  return portfolio;
}

exports.getById = (id) => {
  const portfolio = JSON.parse(fs.readFileSync(dataFilePath));
  return portfolio.portfolio.find((p) => p.id === parseInt(id));
};
exports.putById = (id, img, etc, link, paragraph, title) => {
  const portfolio = JSON.parse(fs.readFileSync(dataFilePath));
  const changeIndex = portfolio.portfolio.findIndex((p) => p.id === parseInt(id))
  portfolio.portfolio.splice(changeIndex, 1, [{ id, img, etc, link, paragraph, title }])
  fs.writeFileSync(dataFilePath, JSON.stringify(portfolio));
  return portfolio
}

