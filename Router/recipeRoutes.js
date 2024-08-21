import { Router } from 'express'
import * as controller from '../Controllers/recipeController.js'

const router = Router()

router.get('/', controller.getAllRecipes)
router.get('/:id', controller.getRecipe)
router.post('/new', controller.newRecipe)
router.put('/edit:id', controller.editRecipe)
router.delete('/delete/:id', controller.deleteRecipe)

export default router