import Product  from '../Model/product.js'


export const productList =(req,res)=>{
    Product.find()
    .then((product)=>res.status(200).json({success:true,product:product}))
    .catch((err)=>console.log(err))
}
export const ProductAdd =(req,res)=>{
    console.log(req.file.filename)
    console.log(req.body.userId)

    new Product({
        name:req.body.name,
        category:req.body.category,
        prise:req.body.prise,
        img:req.file.filename,
        userId:req.body.userId
    }).save()
    .then(()=>res.status(201).json({success: true, message:"Product add successfully"}))
    .catch((err)=>console.log(err))
    
}

export const userProduct = (req, res) => {
        console.log(req.params)
        const {id} = req.params
        Product.find()
        .then((resData)=>{
          const filterData =  resData.filter((data)=>data.userId === id)
         res.status(200).json({product:filterData})
        })
        .catch(err=>console.log(err))
}