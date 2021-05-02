const Coffee = require('../models/coffee')

describe('Coffee model tests', () => {
    test('title  must be required', async () => {
        expect.assertions(1)

        try {
            await Coffee.create({
                description: "demo",
                category: "iced",
                ingredients: [
                    "iced"
                ]
            })
        } catch (e) {
            expect(e).toBeTruthy()
        }
    })
    test('description must be required', async () => {
        expect.assertions(1)
        try {
            await Coffee.create({
                title: "demo",
                category: "iced",
                ingredients: [
                    "iced"
                ]
            })
        } catch (e) {
            expect(e).toBeTruthy()
        }
    })
    test('category must be required', async () => {
        expect.assertions(1)

        try {
            await Coffee.create({
                title: "demo",
                description: "demo",
                ingredients: [
                    "iced"
                ]
            })
        } catch (e) {
            expect(e).toBeTruthy()
        }
    })
    test('category must be iced or hot', async () => {
        expect.assertions(1)

        try {
            await Coffee.create({
                title: "demo",
                description: "demo",
                category: "somethingelse",
                ingredients: [
                    "iced"
                ]
            })
        } catch (e) {
            expect(e).toBeTruthy()
        }
    })
    test('ingredients must be required', async () => {
        expect.assertions(1)

        try {
            await Coffee.create({
                title: "demo",
                description: "demo",

            })
        } catch (e) {
            expect(e).toBeTruthy()
        }
    })


})
