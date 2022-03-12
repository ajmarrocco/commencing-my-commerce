// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define an id column
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // define product name column
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // define product name column
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // define price column
    price: {
      // might have to change to string
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        //checks format for decimal
        isDecimal: true
      }
    },
    // define stock column
    stock: {
      // might have to change to string
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        //checks format for decimal
        isNumeric: true
      }
    },
    category_id: {
      type: DataTypes.INTEGER,
        references: {
          model: 'category',
          key: 'id'
        }
    }
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'product',
    freezeTableName: true
  }
);

module.exports = Product;
