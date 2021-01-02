'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AvatarFiles extends Model {
    static associate(models) {
      // define association here
    }
  };
  AvatarFiles.init({
    name: DataTypes.STRING,
    path: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AvatarFiles',
  });
  return AvatarFiles;
};
