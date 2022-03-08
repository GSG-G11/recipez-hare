const jwt =require('jsonwebtoken')
const jwtSignPromise =(username)=>new Promise((resolve,reject)=>{
        jwt.sign(username,process.env.SECRECT_KEY,(err,token)=>{
            if(err){
                reject(err)
            }
            resolve(token)
        })
    })


module.exports={jwtSignPromise}