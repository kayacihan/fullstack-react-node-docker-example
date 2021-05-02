require('dotenv').config();
const express = require('express');
const connect = require('./config/connect')
const controller = require('./controllers/contoller')
const cors = require('cors')


const app = express();

//middleware
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/coffee', controller.create)
app.get('/coffee/:id', controller.getById)
app.put('/coffee/:id', controller.updateById)
app.delete('/coffee/:id', controller.removeById)
app.get('/coffee', controller.getAll)

const dbURL = process.env.MONGO_DB_URL;
const port = process.env.PORT
connect(dbURL)
    .then(() => app.listen(port, () => {
        console.log(`API server is running on port ${port}`)
    }))
    .catch(e => console.error(e))

