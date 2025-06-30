// import { Repository } from "typeorm";
// import { AppDataSource } from "../data-source";
// import { Usuarios } from "../entities/usuarios.entitie";
// // import { CreateLogin } from "../schemas/login.schemas";
// import { iCreateLogin, iRetunrLogin, returnLoginSchema } from "../schemas/login.schemas";
// import { AppError } from "../errors";
// import {compare} from "bcryptjs"
// import jwt from "jsonwebtoken"
// export const createLoginService=async(loginData:iCreateLogin):Promise<string>=>{

//      const userRepository: Repository<Usuarios> = AppDataSource.getRepository(Usuarios)
     
//      const findUser:Usuarios|null = await userRepository.findOne({
//         where:{
//             email:loginData.email
//         }
//      })
//      if(!findUser){
//         throw new AppError("Credenciais inválidas",403)
//      }
//       const descrypt = await compare(loginData.password,findUser.password)
//       if(!descrypt){
//             throw new AppError("Credenciais inválidas",403)
//       }
//       const token = jwt.sign({
//             id:findUser.id,
//             email:findUser.email
//         },
//         process.env.secret_key!,
//         {
//             expiresIn:"24h",
//             subject:String(findUser.id)
//         }
//     )
//     const user = returnLoginSchema.parse({
//         token,
//         usuario:findUser
//     })
//         return user
    
// }

import { Repository } from "typeorm";
import { iCreateLogin, iRetunrLogin, returnLoginSchema } from "../schemas/login.schemas";
import { Usuarios } from "../entities/usuarios.entitie";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors";
import jwt from "jsonwebtoken"
import {compare} from "bcryptjs"
export const createLoginService=async(loginData:iCreateLogin):Promise<iRetunrLogin>=>{

    const userRepository:Repository<Usuarios> = AppDataSource.getRepository(Usuarios)

    const findUser:Usuarios|null = await userRepository.findOne({
        where:{
            email: loginData.email
        }
    })
    if(!findUser){
        throw new AppError("Credenciais inválidas",401)
    }
    const descrypt = await compare(loginData.password,findUser.password)
   console.log(descrypt,"decrypt")
   if(!descrypt){
    throw new AppError("Credenciais inválidas",401)
   }
   
        const token = jwt.sign({
            id:findUser.id,
            email:findUser.email
        },
        process.env.SECRET_KEY!,
        {
            expiresIn:"24h",
            subject:String(findUser.id)
        }
    )
    const user = returnLoginSchema.parse({
        token,
        usuario:findUser
    })
        return user
    
}