import * as controller from '../Controllers/ingredientController.js'
import {Router} from 'express'

const router = Router()

router.get('/', controller.getAllIngredients)
router.get('/:id', controller.getIngredient)
router.post('/new', controller.newIngredient)
router.put('/edit/:id', controller.editIngredient)
router.delete('/delete/:id', controller.deleteIngredient)

export default router