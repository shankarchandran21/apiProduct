import Admin from "../Model/adminUser.js"
// import admin from "../Model/adminUser.js"
import NormalUsers from "../Model/users.js"

export const addAdmin = (req,res)=>{
    new Admin(req.body).save()
    .then(()=>res.status(201).json({success: true, message:"Admin user add successfully"}))
    .catch((err)=>console.log(err))
    
}


export const addUser = (req,res)=>{
    new NormalUsers(req.body).save()
    .then(()=>res.status(201).json({success: true, message:"User add successfully"}))
    .catch((err)=>console.log(err))
}


export const findAdmin = (req,res)=>{
    Admin.findOne(req.params)
    .then((user)=>{
        if(user){
            res.status(403).json({user:user})
        }else{
            res.status(201).json({user:null})
        }
    })
    .catch((err)=>console.log(err))
}

export const findUser = (req,res)=>{
    NormalUsers.findOne(req.params)
    .then((user)=>{
        if(user){
            res.status(403).json({user:user})
        }else{
            res.status(201).json({user:null})
        }
    })
    .catch((err)=>console.log(err))
}


export const findLoginUser =(req,res)=>{
    const { name, password } = req.params;
    console.log(name)
    NormalUsers.findOne({name})
    .then((user)=>{
        if(user && user.password === password ){
            res.status(200).json({user:user})
        }else if(user){
            res.status(401).json({message:"Password is not valid"})
        }else{
            res.status(404).json({message:"User don't have account"})
        }
    })
}



export const findLoginAdmin =(req,res)=>{
    const { name, password } = req.params;
    console.log(name)
    Admin.findOne({name})
    .then((user)=>{
        if(user && user.password === password ){
            res.status(200).json({user:user})
        }else if(user){
            res.status(401).json({message:"Password is not valid"})
        }else{
            res.status(404).json({message:"Admin name don't have account"})
        }
    })
}