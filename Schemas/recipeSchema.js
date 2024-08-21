import mongoose from 'mongoose'

const recipeSchema = new mongoose.Schema({
        name: {
            type: String,
            unique: false,
            required: true,
            select: true
        },
        prepTime: {
            type: Number,
            required: false
        },
        cookTime: {
            type: Number,
            required: false
        },
        ingredients: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ingredients'
        }],
        Instructions: String,
        Description: String
})

const Recipe = mongoose.model("Recipe", recipeSchema)

export default Recipe