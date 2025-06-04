import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Usuarios } from "../entities/usuarios.entitie";
import { CreateLogin } from "../schemas/login.schemas";
import { AppError } from "../errors";
import {compare} from "bcryptjs"
import jwt from "jsonwebtoken"
export const createLoginService=async(loginData:CreateLogin):Promise<string>=>{

     const userRepository: Repository<Usuarios> = AppDataSource.getRepository(Usuarios)
     
     const findUser:Usuarios|null = await userRepository.findOne({
        where:{
            email:loginData.email
        }
     })
     if(!findUser){
        throw new AppError("Credenciais inválidas",403)
     }
      const descrypt = await compare(loginData.password,findUser.password)
      if(!descrypt){
            throw new AppError("Credenciais inválidas",403)
      }
      const token = jwt.sign({
            id:findUser.id,
            email:findUser.email
        },
        process.env.secret_key!,
        {
            expiresIn:"24h",
            subject:String(findUser.id)
        }
    )
    return token

}