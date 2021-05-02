const Coffee = require('../models/coffee')

// Create a single coffee
const createCoffee = async (coffeeDetails) => {
  try {
    const data = await Coffee.create(coffeeDetails)
    return data
  } catch (err) {
    return { error: err };
  }
}

// Returns a single coffee instance
const getAllCoffees = async () => {
  try {
    const data = await Coffee.find({})
    return data
  } catch (err) {
    return { error: err };
  }
}

// Returns a single coffee instance
const getCoffeeById = async (id) => {
  try {
    const data = await Coffee.findById(id)
    return data
  } catch (err) {
    return { error: err };
  }
}

// Deletes a single coffee
const removeCoffeeById = async (id) => {
  try {
    const data = await Coffee.findByIdAndDelete(id)
    return data
  } catch (err) {
    return { error: err };
  }
}

const updateCoffeeById = async (id, update) => {
  try {
    const data = await Coffee.findByIdAndUpdate(id, update)
    return await Coffee.findById(data.id)
  } catch (err) {
    return { error: err };
  }
}


module.exports = {
  createCoffee,
  getAllCoffees,
  getCoffeeById,
  removeCoffeeById,
  updateCoffeeById
}
