import {Router} from 'express'
import userRoutes from './userRoutes.js'
import recipeRoutes from './recipeRoutes.js'
import ingredientRoutes from './ingredientRoutes.js'
const router = Router()

router.get('/', (req, res)=>{
    res.send("API Root")
})
router.use('/users', userRoutes)
router.use('/recipes',recipeRoutes)
router.use('/ingredients', ingredientRoutes)

export default router