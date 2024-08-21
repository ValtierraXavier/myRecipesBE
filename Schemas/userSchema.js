import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        select: true
    },
    userName: {
        type: String,
        required: true,
        unique: true,
        select: true
    },
    encPassword: {
        type: String,
        required: true,
        unique: false,
        select: false
    },
    joined: {
        type: String,
        select: true
    },
    settings: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Settings',
        select: true
    },
    recipes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "recipes"

    }],
    favorites: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "recipes"
    }]
})

const User = mongoose.model('User', userSchema)

export default User