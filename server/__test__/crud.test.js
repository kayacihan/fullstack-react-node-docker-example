const Coffee = require('../models/coffee')
const crud = require('../controllers/db_operations')

describe('Coffee crud', () => {
  describe('getCoffeeById', () => {
    test('get coffee by object id', async () => {
      const coffee = await Coffee.create({
        title: "demo",
        description: "demo",
        category: "iced",
        ingredients: [
          "demo"
        ]
      })
      const match = await crud.getCoffeeById(coffee.id)
      expect(match.id).toBe(coffee.id)
    })
  })
  describe('getAllCoffees', () => {
    test('get all coffees in the DB', async () => {
      const coffeesToCreate = [
        {
          title: "demo1",
          description: "demo1",
          category: "iced",
          ingredients: [
            "demo1"
          ]
        },
        {
          title: "demo2",
          description: "demo2",
          category: "iced",
          ingredients: [
            "demo2"
          ]
        },
        {
          title: "demo3",
          description: "demo3",
          category: "iced",
          ingredients: [
            "demo3"
          ]
        }
      ]
      const coffees = await Coffee.create(coffeesToCreate)
      const matchedCoffees = await crud.getAllCoffees()

      expect(matchedCoffees).toHaveLength(coffees.length)
    })
  })
  describe('createCoffee', () => {
    test('create a coffee', async () => {
      const coffeeConfig = {
        title: "demo",
        description: "demo",
        category: "iced",
        ingredients: [
          "demo"
        ]
      }
      const { id } = await crud.createCoffee(coffeeConfig)
      const match = await Coffee.findById(id).exec()
      expect(match.id).toBe(id)
    })
  })
  describe('removeCoffeeById', () => {
    test('remove coffee by id', async () => {
      const { id } = await Coffee.create({
        title: "demo",
        description: "demo",
        category: "iced",
        ingredients: [
          "demo"
        ]
      })
      await crud.removeCoffeeById(id)
      const match = await Coffee.findById(id).exec()
      expect(match).toBe(null)
    })
  })
  describe('updateCoffeeById', () => {
    test('update coffee by id', async () => {
      const { id } = await Coffee.create({
        title: "demo",
        description: "demo",
        category: "iced",
        ingredients: [
          "demo"
        ]
      })

      const coffee = await crud.updateCoffeeById(id, {
        title: "demo2",
        description: "demo2",
        category: "iced",
        ingredients: [
          "demo2"
        ]
      })
      expect(coffee.id).toBe(id)
      expect(coffee.title).toBe("demo2")
    })
  })
})
