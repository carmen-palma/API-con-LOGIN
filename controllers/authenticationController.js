const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const users = []; // You'll need to store users in a database

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(user => user.username === username);
  if (user == null) return res.sendStatus(404);

  try {
    if (await bcrypt.compare(password, user.password)) {
      const accessToken = jwt.sign({ username: user.username }, process.env.ACCESS_TOKEN_SECRET);
      res.json({ accessToken: accessToken });
    } else {
      res.sendStatus(401);
    }
  } catch {
    res.sendStatus(500);
  }
};

module.exports = { loginUser };