const { DataTypes } = require('sequelize')
const database = require('./database')

const Train = database.define('trains', {
   id: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true, unique: true},
   number: {type: DataTypes.STRING, allowNull: false},
   path: {type: DataTypes.STRING, allowNull: false},
   distance: {type: DataTypes.STRING, allowNull: false},
   continuity: {type: DataTypes.STRING, allowNull: false},
   ds: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
   sh: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
   cr: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
   pn: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
   an: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
   ss: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
   yk: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
});

const Aeroplane = database.define('aeroplanes', {
   id: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true, unique: true},
   number: {type: DataTypes.STRING, allowNull: false},
   path: {type: DataTypes.STRING, allowNull: false},
   distance: {type: DataTypes.STRING, allowNull: false},
   continuity: {type: DataTypes.STRING, allowNull: false},
   ds: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
   sh: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
   cr: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
   pn: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
   an: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
   ss: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
   yk: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
});

const Bus = database.define('buses', {
   id: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true, unique: true},
   number: {type: DataTypes.STRING, allowNull: false},
   path: {type: DataTypes.STRING, allowNull: false},
   distance: {type: DataTypes.STRING, allowNull: false},
   continuity: {type: DataTypes.STRING, allowNull: false},
   ds: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
   sh: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
   cr: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
   pn: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
   an: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
   ss: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
   yk: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
});

module.exports = { Train, Aeroplane, Bus }