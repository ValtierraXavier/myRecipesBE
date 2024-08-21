import mongoose from "mongoose"
import chalk from "chalk"

const connectionConfig = {}
const URL = 'mongodb://127.0.0.1:27017/recipes'
mongoose.set('strictQuery', false)

mongoose.connect(URL, connectionConfig)

mongoose.connection.on('connected', ()=>{console.log('server connected')})
mongoose.connection.on('disconnected', ()=>{console.log('server disconnected')})
mongoose.connection.on('error', (error)=>{console.log(error.message)})

export default mongoose.connection