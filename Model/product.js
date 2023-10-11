import mongoose  from 'mongoose'

export const productSchema = mongoose.Schema({
    category:{
        type: 'string',
        require: true
    },img:{
        type:'string',
        require: true
    },prise:{
        type:Number,
        require: true
    },name:{
        type:'string',
        require: true
    },userId:{
        type:'string',
        require: true
    }
})




const Product = mongoose.model('Product',productSchema)


export default Product