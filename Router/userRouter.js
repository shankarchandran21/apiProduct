import express from 'express';
import { addAdmin, addUser, findAdmin, findLoginAdmin, findLoginUser, findUser } from '../Controller/userController.js';

const router = express.Router()

//http://localhost:5000/api/p1/products/add/admin
router.post('/add/admin',addAdmin)
//http://localhost:5000/api/p1/products/add/user
router.post('/add/user',addUser)

//http://localhost:5000/api/p1/products/admin/:name
router.get('/admin/:name',findAdmin)


//http://localhost:5000/api/p1/products/user/:name
router.get('/user/:name',findUser)

//http://localhost:5000/api/p1/products/login/user/:name/:password
router.get('/login/user/:name/:password',findLoginUser)

//http://localhost:5000/api/p1/products/login/admin/:name/:password
router.get('/login/admin/:name/:password',findLoginAdmin)





export default router