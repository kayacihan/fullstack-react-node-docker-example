require('dotenv').config();
const express = require('express');
const connect = require('./config/connect')
const Coffee = require('./models/coffee')
const controller = require('./controllers/db_operations')


const cors = require('cors')

const app = express();


//middleware
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/coffee', async (req, res) => {
    const myCoffee = req.body
    const coffee = await controller.createCoffee(myCoffee)
    res.status(201).json(coffee.toJSON())
})

app.get('/coffee', async (_, res) => {
    const coffee = await Coffee.find({}).lean()
    res.status(200).json(coffee)
})

const dbURL = process.env.MONGO_DB_URL;
const port = process.env.PORT
connect(dbURL)
    .then(() => app.listen(port, () => {
        console.log(`API server is running on port ${port}`)
    }))
    .catch(e => console.error(e))

