import mongoose  from 'mongoose'

 const userSchema = mongoose.Schema({
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
    }
})




const Product = mongoose.model('Product',userSchema)


export default Product