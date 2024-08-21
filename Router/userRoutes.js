import * as controller from '../Controllers/userController.js'
import {Router} from 'express'

const router = Router()

router.get('/', controller.getAllUsers)
router.get('/:id', controller.getUser)
router.post('/new', controller.newUser)
router.put('/edit:id', controller.editUser)
router.delete('/delete/:id', controller.deleteUser)

export default router