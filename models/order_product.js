'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order_product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  order_product.init({
    quantity: {
      type: DataTypes.INTEGER,
      allowNull:false,
      defaultValue: 0

    }
    
  }, {
    sequelize,
    modelName: 'order_product',
  });
  return order_product;
};