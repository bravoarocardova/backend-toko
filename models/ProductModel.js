import db from '../config/Database.js';
import { DataTypes } from 'sequelize';

const product = db.define('product', {
  name : {
    type : DataTypes.STRING,
    allowNull:false
  },
  price : {
    type : DataTypes.INTEGER,
    allowNull:false
  },
  stock : {
    type : DataTypes.INTEGER,
    allowNull:false
  }
},{
  freezeTableName: true
});

export default product;