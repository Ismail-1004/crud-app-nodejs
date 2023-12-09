import Router from 'express'
import TaskRouter from './tasksRouter.js'

const router = Router()

router.use('/tasks', TaskRouter)

export default router
