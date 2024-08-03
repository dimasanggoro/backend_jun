const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.headers['jsonwebtoken'];
  if (!token) return res.status(401).json({ message: "Access denied." });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: "Invalid token." });
    req.userId = decoded.userId;
    next();
  });
};
