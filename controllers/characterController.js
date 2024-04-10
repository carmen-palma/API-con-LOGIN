const fetch = require('node-fetch');

const getCharacterByName = async (req, res) => {
  const name = req.params.name;
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getCharacterByName };

// a