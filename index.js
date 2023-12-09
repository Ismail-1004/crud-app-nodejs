import 'dotenv/config'
import express from 'express'
import models from './models/models.js'
import sequelize from './db.js'
import cors from 'cors'
import router from './routes/index.js'

const PORT = process.env.PORT || 5000
const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', router)

const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))     
  } catch (e) {
    throw e
  }
}

start()
