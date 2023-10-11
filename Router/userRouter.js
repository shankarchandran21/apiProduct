import express from 'express';
import { addAdmin, addUser, findAdmin, findLoginAdmin, findLoginUser, findUser } from '../Controller/userController.js';
import path from 'path'
import multer from 'multer';
import Admin from '../Model/adminUser.js';


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

const router = express.Router()

//http://localhost:5000/api/p1/products/add/admin
router.post('/add/admin',addAdmin)

//http://localhost:5000/api/p1/products/add/admin/:id
// router.put('/add/admin/:id',upload.single("img"),(req,res)=>{
//         console.log(req.body)
//         console.log(req.file)
//         Admin.findByIdAndUpdate(req.params.id,{
//                 $push:{
//                     products:"Shankar"
//                 }
//         })
//     .then(()=>res.status(201).json({success: true, message:"Product add successfully"}))
//     .catch((err)=>console.log(err))

// })

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