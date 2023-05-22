const authService = require("./auth.service");


exports.postLogin = (req, res) => {
  const { username, password } = req.body;
  const response = authService.postLogin(username, password)
  res.json(response);
}
exports.postLogout = (req, res) => {
  const response = authService.postLogout(username, password)
  res.json(response);
}
exports.postRegister = (req, res) => {
  const response = authService.postRegister(username, password)
  res.json(response);
}
exports.deleteAccount = (req, res) => {
  const response = authService.deleteAccount(username, password)
  res.json(response);
}

module.exports = router;