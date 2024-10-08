import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
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
        type: Date,
        default: Date.now,
        select: false
    },
    settings: {
        type: Object,
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