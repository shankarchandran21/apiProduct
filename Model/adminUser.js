import mongoose  from 'mongoose'
import { productSchema } from './product.js'

const adminSchema = mongoose.Schema({
   name:{
        type:'string',
        require: true
    },password:{
        type:'string',
        require:true
    },roll:{
        type:'string',
        require:true,
    },products:[String]
})

const Admin = mongoose.model('admin',adminSchema)

export default Admin