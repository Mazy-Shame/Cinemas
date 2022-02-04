const Router = require('express')
const userrouter = new Router()

const userController = require('../controllers/user.controller')

userrouter.get('/users', userController.getUsers)
userrouter.post('/createUser', userController.createUser)
userrouter.get('/users/:id', userController.getOneUser)
userrouter.put('/usersUpdate', userController.updateUser)
userrouter.delete('/userdelete/:id', userController.deleteUser)
userrouter.put('/userSetHoll', userController.userAddToHoll)



module.exports = userrouter