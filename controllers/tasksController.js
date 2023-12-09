import models from '../models/models.js'

class TasksController {
  async getTasks(req, res) {
    try {
      const tasks = await models.Task.findAll()
      return res.json(tasks)
    } catch (e) {
      throw e
    }
  }
}

export default new TasksController()