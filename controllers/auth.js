module.exports.renderRegisterPage = (_req, res) => {
  res.render("auth/register", { page: "register" });
};

module.exports.renderLoginPage = (_req, res) => {
  res.render("auth/login", { page: "login" });
};
