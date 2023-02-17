const { Penguin } = require('../models');

const create = async(req, res) =>{
  try {
    const peng = await Penguin.create(req.body);
    res.status(200).json(peng);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
}

const index = async(req, res) =>{
  try {
    const pengs = await Penguin.findAll();
    res.status(200).json(pengs);
  } catch (err) {
    res.status(500).json(err)
  }
}

module.exports = {
  create,
  index,
}