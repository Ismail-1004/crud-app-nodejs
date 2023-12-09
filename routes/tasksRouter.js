import Router from 'express'
import tasksController from '../controllers/tasksController.js'

const router = Router()

router.get('/', tasksController.getTasks)
router.post('/create-task', tasksController.createTask)
router.put('/update-task', tasksController.updateTask)
router.delete('/delete-task', tasksController.deleteTask)

export default router