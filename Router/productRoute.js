import express from 'express';
import {productList,ProductAdd, userProduct} from '../Controller/productList.js'
import path from 'path'
import multer from 'multer';
const router = express.Router()


const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public/images')
    },filename:(req,file,cb)=>{
        cb(null,file.fieldname + "_"+Date.now()+path.extname(file.originalname))
      }
    
})

 const upload = multer({
  storage:storage
})

//http://localhost:5000/api/p1/products/list
router.get('/list',productList)

//http://localhost:5000/api/p1/products/user/product/list/:id
router.get('/user/product/list/:id',userProduct)



//http://localhost:5000/api/p1/products/add
router.post('/add',upload.single('img'),ProductAdd)
export default router

