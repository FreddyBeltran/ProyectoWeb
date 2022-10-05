
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const routes = require('./src/routes/router')
const app = express()

dotenv.config()
dotenv.config({path: "./.env"})
app.use(express.urlencoded({extended: false}))
app.use(express.json());

const corsOptions = { origin: '*' }
app.use(cors(corsOptions));

routes(app);
require('./src/db/connect');

app.listen(process.env.PORT, () => {
    console.log('Started on PORT ', process.env.PORT)
})