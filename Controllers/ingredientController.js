import Ingredient from "../Schemas/IngredientsSchema.js";
import Recipe from "../Schemas/recipeSchema.js";

export const getAllIngredients = async (req, res) => {
    console.log("Triggered ingredients")
    try{
        const ingredients = await Ingredient.find()
        res.send(ingredients)
        
    }catch(error){console.log(error.message)}
}

export const getIngredient = async (req, res) => {
    const id = req.params.id
    try{
        const ingredient = await Ingredient.findById(id)
        res.send(ingredient)
    }catch(error){console.log(error.message)}
}

export const newIngredient = async (req, res) => {
    const body = req.body
    try{
        const newOne = new Ingredient(body)
        newOne.save()
        res.send(newOne)
    }catch(error){console.log(error.message)}
}

export const editIngredient = async (req, res) => {
    const id = req.params.id
    const body = req.body
    try{
        let ingredient = await Ingredient.findByIdAndUpdate(id, body)
        ingredient.save()
        res.send(await Ingredient.findById(id))
    }catch(error){console.log(error.message)}
}

export const deleteIngredient = async (req, res) => {
    const id = req.params.id
    try{
        const deleted = await Ingredient.findByIdAndDelete(id)
        console.log(deleted, id)
        res.send( `${
            deleted? 
            `deleted ${deleted}`:
            "Record does not exist."}`
        )
    }catch(error){console.log(error.message)}
}

export const deleteAllIngredients = async (req, res) => {
    const prev = await Ingredient.find({})
    const deleteAll = await Ingredient.deleteMany()
    console.log(deleteAll)
    res.send(
        `${
            deleteAll.deletedCount?
            `deleted ${prev}`:
            "Database is already empty."
        }`
    )
}