import User from '../Schemas/userSchema.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
// import { Buffer } from 'buffer'

const SALT_ROUNDS = 12
const TOKEN_KEY = 'Xavier.Valtierra.enc'
// const buff = Buffer.from(tokenKey)
// const enc = buff.toString('base64')
// const rev = Buffer.from(enc, 'base64').toString()
export const getAllUsers = async (req, res) => {
    try{
        const allUsers = await User.find()
        res.send(allUsers)
    }catch(error){console.log(error.message)}
}

export const getUser = async (req, res) => {
    const userName = req.params.username
     try{
        const user = await User.find({userName})
        res.send(user)
    }catch(error){console.log(error.message)}
}

export const userLogin = async (req, res) => {
    const {userName, password} = req.body

    try{
        const user = await User.findOne({userName}).select('userName, encPassword')
        
        if(!user){
            res.status(404).send()
            return
        }
        if(await bcrypt.compare(password, user.encPassword)) {
            const payload = {
                userName,
                id: user?._id
            }
            const token = jwt.sign(payload, TOKEN_KEY)
            res.status(200).send({token, message: `You're all set, ${userName}.`})
        }else{
            res.status(401).send("Incorrect credentials")
        }
    }catch(error){
        if(!userName || !password){
            res.send("Please fill out both the \'username\' and \' password\' feilds.")
        }
        console.log(error)
    }
}


export const newUser = async (req, res) => {
    const {name, userName, password} = req.body
    
     try{
        const encPassword = await bcrypt.hash(password, SALT_ROUNDS)
        const newUser = new User({
            name,
            userName,
            encPassword
        })
        newUser.save()
        const payload = {
            id: newUser._id,
            userName,
        }
        const token = jwt.sign(payload, TOKEN_KEY)
        res.send({token, message: `Welcome ${userName}, lets get cooking!`})
    }catch(error){console.log(error.message)}
}

export const editUser = async (req, res) => {
    const id = req.params.id
    const body = req.body
     try{
        const edited = await User.findByIdAndUpdate(id, body)
        edited.save()
        res.send(await User.findById(id))

    }catch(error){console.log(error.message)}
}

export const deleteUser = async (req, res) => {
    const id = req.params.id
     try{
        const deleted = await User.findByIdAndDelete(id)
        res.send(`${
            deleted?
            `deleted ${deleted}`:
            "Record does not exist."}`
        )
    }catch(error){console.log(error.message)}
}