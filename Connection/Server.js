import connection from "./Connection.js";
import express from 'express'
import cors from 'cors'
import chalk from "chalk";
import router from "../Router/index.js";
import bodyParser from 'body-parser'


const app = express()
const port = 3005

app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/', router)
connection.on('connected', ()=>{
    console.clear()
    app.listen(port, ()=>{
        console.log(`${chalk.green("Server Connection Established on port:")} ${chalk.green.bold(port)}`)
    })

})