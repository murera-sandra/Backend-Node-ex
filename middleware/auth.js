const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.header("authorization");

    if (!token) {
      return res.status(401).json({ message: "No Token,authorization denied" });
    }

    const decode = jwt.verify(token, process.env.JWT_SECRETE);

    req.user = decode;
    next();
  } catch (error) {
    return res.status(401).json({ message: "invalid credential" });
  }
};
