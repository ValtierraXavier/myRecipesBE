import User from '../Schemas/userSchema.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const saltRounds = 12
const tokenKey = 'xavier.valtierra.enc'

export const getAllUsers = async (req, res) => {
     try{
        const allUsers = User.find({})
        res.send(allUsers)
    }catch(error){console.log(error.message)}
}

export const getUser = async (req, res) => {
    const id = req.params.id
     try{
        const user = User.findById(id)
        res.send(user)
    }catch(error){console.log(error.message)}
}

export const newUser = async (req, res) => {
    const body = req.body
     try{
        const newUser = new User(body)
        newUser.save()
        res.send(`${newUser} added`)
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
        const deleted = User.findByIdAndDelete(id)
        res.send(`${
            deleted?
            `deleted ${deleted}`:
            "Record does not exist."}`
        )
    }catch(error){console.log(error.message)}
}