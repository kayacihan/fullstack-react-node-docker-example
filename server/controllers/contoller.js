const controller = require('./db_operations')

const gotoController = {
    create: async (req, res) => {
        const newCoffee = req.body
        const data = await controller.createCoffee(newCoffee)
        if (data.error) return res.status(400).json(data);
        return res.status(201).json({ success: true, data });
    },
    getAll: async (req, res) => {
        let data = await controller.getAllCoffees()
        if (data.error) return res.status(500).json(data)
        return res.status(200).json({ success: true, data });
    },
    getById: async (req, res) => {
        let { id } = req.params
        let data = await controller.getCoffeeById(id)
        if (data.error) return res.status(404).json(data)
        return res.status(200).json({ success: true, data });
    },
    removeById: async (req, res) => {
        let { id } = req.params
        let data = await controller.removeCoffeeById(id)
        if (data.error) return res.status(404).json(data)
        return res.status(201).json({ success: true, data });
    },
    updateById: async (req, res) => {
        let { id } = req.params
        let data = await controller.updateCoffeeById(id, req.body)
        if (data.error) return res.status(404).json(data)
        return res.status(201).json({ success: true, data });
    },
};

module.exports = gotoController;