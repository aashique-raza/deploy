import dotenv from 'dotenv'
dotenv.config()

import express from 'express'

const PORT=process.env.PORT
const app=express()


app.get('/',(req,res)=>{
    res.json({type:'success',msg:'deploy successfull'})
})


app.listen(PORT,()=>console.log(`server running at ${PORT}`))