const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    return res
      .status(401)
      .json([{ msg: "login first to acces this ressource" }]);
  }

  try {
    const coded = await jwt.verify(token, process.env.SECRET_TOKEN);
    req.user = coded.user;
    next();
  } catch (err) {
    res.status(500).send([{ msg: "token not valid" }]);
  }
};

module.exports = auth;
