'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Habitat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Habitat.init({
    name: DataTypes.STRING,
    climate: {
      type: DataTypes.ENUM('Tundra', 'Frozen Wasteland', 'Temperate Plains'),
      defaultValue: 'Frozen Wasteland'
    },
    pengId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Penguins',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Habitat',
  });
  return Habitat;
};