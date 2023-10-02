import express from 'express';
import {productList,ProductAdd} from '../Controller/productList.js'
const router = express.Router()


//http://localhost:5000/api/p1/products/list
router.get('/list',productList)
//http://localhost:5000/api/p1/products/add
router.post('/add',ProductAdd)
export default router