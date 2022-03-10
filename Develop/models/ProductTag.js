const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define an id column
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.INTEGER,
        references: {
          model: 'product',
          key: 'id'
        }
    },
    tag_id: {
      type: DataTypes.INTEGER,
        references: {
          model: 'tag',
          key: 'id'
        }
    }
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'product_tag',
    freezeTableName: true
  }
);

module.exports = ProductTag;
