const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.register = (req, res) => {
  const { name, email, password } = req.body;
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) return res.status(500).json({ error: err });
    User.create({ name, email, password: hash }, (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.status(201).json({ message: "Berhasil Registrasi akun!." });
    });
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  User.findByEmail(email, (err, results) => {
    if (err || results.length === 0) return res.status(401).json({ message: "Authentication failed." });
    bcrypt.compare(password, results[0].password, (err, result) => {
      if (err || !result) return res.status(401).json({ message: "Authentication failed." });

      const token = jwt.sign({ userId: results[0].id }, process.env.JWT_SECRET, { expiresIn: "1h" });
      
      res.status(200).json({ message: "Berhasil Login.", token });
    });
  });
};
