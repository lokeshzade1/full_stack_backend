let express=require('express')
let app=express()
let mod=require('../model')
let cors=require('cors')
let bodypar=require('body-parser')

app.use(cors({
    origin:'*'
}))
app.use(express.json())
app.use(bodypar.urlencoded({extended:false}))
app.use(bodypar.json())
app.post('/register', async(req,res)=>{
    try {
        let product=await mod.create(req.body)
        res.json({
            masseage:'completed',
            val:product
        })
    } catch (error) {
        res.json({
            masseage:error
        })
    }
})

app.post('/login', async(req,res)=>{
    try {
        let realname=await mod.findOne({name:req.body.name})
        let realpassword=await mod.findOne({password:req.body.password})
        if(realname || realpassword){
            res.json({
                masseage:'exist',
                val:product,
                status:realname,
                password:realpassword
            })
        }
        else{
            res.json({
                masseage:'fail',
                val:product,
                status:'fail you have to register'
            })
        }
       
    } catch (error) {
        res.json({
            masseage:error
        })
    }
})
app.get('/', async(res,req)=>{
    try {
        let pro=await mod.findOne({name:res.body.name})
        console.log(res.body)
        req.json({
            data:pro
        })
    } catch (error) {
        req.json({
            data:error
        })
    }
})
module.exports=app