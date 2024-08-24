import Recipe from '../Schemas/recipeSchema.js'

export const getAllRecipes = async (req, res) => {
    console.log("Triggered recipe")
    try{
        const allrecipes = await Recipe.find({})
        res.send(allrecipes)
    }catch(error){console.log(error.message)}
}

export const getRecipe = async (req, res) => {
    const id = req.params.id
    const recipe = await Recipe.findById({id})
    try{
        res.send(recipe)
    }catch(error){console.log(error.message)}
}

export const newRecipe = async (req, res) => {
    const body = req.body
    try{
        const newRecipe = new Recipe(body)
        newRecipe.save()
        res.send(newRecipe)
    }catch(error){console.log(error.message)}
}

export const editRecipe = async (req, res) => {
    const id = req.params.id
    const body = req.body
    try{
        const edited = await Recipe.findByIdAndUpdate(id, body)
        edited.save()
        res.send(await Recipe.findById(id))
    }catch(error){console.log(error.message)}
}

export const deleteRecipe = async (req, res) => {
    const id = req.params.id
    try{
        const deleted = await Recipe.findByIdAndDelete(id)
        res.send(`${
            deleted?
            `deleted ${deleted}`:
            "Record does not exist."
        }`)
    }catch(error){console.log(error.message)}
}