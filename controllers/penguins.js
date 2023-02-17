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

const update = async(req, res) =>{
  try {
    const peng = await Penguin.update(
      req.body,
      { where: {id: req.params.id }, returning: true }
    )
    res.status(200).json(peng);
  } catch (err) {
    res.status(500).json(err)
  }
}

const delPenguin = async(req, res) =>{
  try {
    // const numPengsRemoved = await Penguin.destroy(
    //   {where: { id: req.params.id }}
    // )
    // res.status(200).json(numPengsRemoved);

    const peng = await Penguin.findByPk(req.params.id);
    await peng.destroy()
    res.status(200).json(peng);

  } catch (err) {
    res.status(500).json(err);
  }
}

module.exports = {
  create,
  index,
  update,
  delete: delPenguin,
}