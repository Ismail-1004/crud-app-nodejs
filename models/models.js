import sequelize from '../db.js'
import { DataTypes } from 'sequelize'

const Task = sequelize.define('task', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  body: { type: DataTypes.STRING, allowNull: false}
})

export default { Task }
