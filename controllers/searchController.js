const fetch = require('node-fetch');

const searchCharacter = async (req, res) => {
  const name = req.query.name;
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`);
    const data = await response.json();
    res.json(data.results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { searchCharacter };
