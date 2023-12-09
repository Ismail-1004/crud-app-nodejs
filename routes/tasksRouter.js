import Router from 'express'
import tasksController from '../controllers/tasksController.js'

const router = Router()

router.get('/', tasksController.getTasks)

export default router