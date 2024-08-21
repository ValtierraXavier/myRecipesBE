import mongoose from 'mongoose'

const ingredientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quantity:{
        amount: Number,
        unit: String
    }    
})

const Ingredient = mongoose.model('Ingredient', ingredientSchema)
export default  Ingredient