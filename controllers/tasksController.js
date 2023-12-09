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

  async createTask(req, res) {
    try {
      const { title, body } = req.body
      const task = await models.Task.create({ title, body })
      return res.json(task)
    } catch (e) {
      return res.json(e)
    }
  }

  async updateTask(req, res) {
    try {
      const { id } = req.body

      await models.Task.update(req.body, { where: { id: id } })

      return res.status(200).json({ message: 'Task was updated' })
    } catch (e) {
      return res.json(e)
    }
  }

  async deleteTask(req, res) {
    try {
      const { id } = req.body
      await models.Task.destroy({ where: { id: id } })

      return res.status(200).json({ message: 'Task was deleted' })
    } catch (e) {
      throw e
    }
  }
}

export default new TasksController()