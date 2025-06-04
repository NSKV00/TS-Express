

import {Router} from "express"
//import { connection } from "../db.js"
import { validateDataMiddleware } from "../middleware/validateData.middleware.js"
//import { createLoginSchema } from "../schemas/login.schemas.js"
import jwt from "jsonwebtoken"
import {compare} from "bcryptjs"
import { createLoginSchema } from "../schemas/login.schemas.js"
import { createLoginController } from "../controllers/login.controllers.js"
export const loginRoutes = Router()

loginRoutes.post("",validateDataMiddleware(createLoginSchema),createLoginController)
//  async (req,res)=>{
//     const infos = Object.keys(req.body)
//     if(erro){
//         return res.status(403).json({mensage:erro.mensage ${createLoginSchema}})
//     }
// })
//     const text = 'select * from usuarios where email = $1'
//     const values = [req.body.email]
    
//     const userDb = await connection.query(text,values)
//     const user = userDb.rows[0]
//     const descrypt = await compare(req.body.password,user.password)
//    console.log(descrypt,"decrypt")
//     if(descrypt){
//         const token = jwt.sign({
//             id:user.id,
//             email:user.email
//         },
//         process.env.secret_key,
//         {
//             expiresIn:"24h",
//             subject:String(user.id)
//         }
//     )
//         return res.status(201).json({...user,token})
//     }
//     return res.status(403).json({message:"E-mail ou senha inválidos"})
// })