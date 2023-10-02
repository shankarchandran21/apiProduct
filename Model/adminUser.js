import mongoose  from 'mongoose'


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
    }
})

const Admin = mongoose.model('admin',adminSchema)

export default Admin