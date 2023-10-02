import Product  from '../Model/product.js'


export const productList =(req,res)=>{
    Product.find()
    .then((product)=>res.status(200).json({success:true,product:product}))
    .catch((err)=>console.log(err))
}
export const ProductAdd =(req,res)=>{
    new Product(req.body).save()
    .then(()=>res.status(201).json({success: true, message:"Product add successfully"}))
    .catch((err)=>console.log(err))
    
}