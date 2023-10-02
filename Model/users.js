import mongoose  from 'mongoose'


const userSchema = mongoose.Schema({
   name:{
        type:'string',
        require: true
    },password:{
        type:'string',
        require:true
    },roll:{
        type:'string',
        require:true,
    }
})

const NormalUsers = mongoose.model('normalUsers',userSchema)

export default NormalUsers