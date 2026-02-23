const { Coffee } = require('../models')

module.exports = {

  // =========================
  // GET ALL
  // =========================
  async index (req, res) {
    try {
      const coffees = await Coffee.findAll()
      res.send(coffees)
    } catch (err) {
      console.error(err)
      res.status(500).send({ error: 'Failed to fetch coffees' })
    }
  },

  // =========================
  // GET BY ID
  // =========================
  async show (req, res) {
    try {
      const coffee = await Coffee.findByPk(req.params.coffeeId)

      if (!coffee) {
        return res.status(404).send({ message: 'Coffee not found' })
      }

      res.send(coffee)
    } catch (err) {
      console.error(err)
      res.status(500).send({ error: 'Failed to fetch coffee' })
    }
  },

  // =========================
  // CREATE
  // =========================
  async create (req, res) {
    try {
      console.log('BODY:', req.body)

      const coffee = await Coffee.create({
        name: req.body.name,
        price: req.body.price,
        type: req.body.type,
        status: req.body.status,
        image: req.body.image   // ⭐ บันทึกรูป
      })

      res.send(coffee)
    } catch (err) {
      console.error(err)
      res.status(400).send({ error: 'Failed to create coffee' })
    }
  },

  // =========================
  // UPDATE
  // =========================
  async update (req, res) {
    try {
      const coffee = await Coffee.findByPk(req.params.coffeeId)

      if (!coffee) {
        return res.status(404).send({ message: 'Coffee not found' })
      }

      await coffee.update({
        name: req.body.name,
        price: req.body.price,
        type: req.body.type,
        status: req.body.status,
        image: req.body.image ? req.body.image : coffee.image
        // ⭐ ถ้าไม่ได้อัปโหลดใหม่ ให้ใช้รูปเดิม
      })

      res.send({ message: 'Coffee updated successfully' })
    } catch (err) {
      console.error(err)
      res.status(400).send({ error: 'Failed to update coffee' })
    }
  },

  // =========================
  // DELETE
  // =========================
  async delete (req, res) {
    try {
      const coffee = await Coffee.findByPk(req.params.coffeeId)

      if (!coffee) {
        return res.status(404).send({ message: 'Coffee not found' })
      }

      await coffee.destroy()

      res.send({ message: 'Coffee deleted successfully' })
    } catch (err) {
      console.error(err)
      res.status(400).send({ error: 'Failed to delete coffee' })
    }
  }

}
