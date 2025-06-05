import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Usuarios } from "../entities/usuarios.entitie";
import {deleteUserController} from "../controllers/usuarios.controllers"
import { CreateLogin } from "../schemas/login.schemas";
import { AppError } from "../errors";
import {compare} from "bcryptjs"
import jwt from "jsonwebtoken"
import { boolean, number } from "zod";

export const deleteUserService = async(userId:number):Promise<void>=>{
    const userRepository : Repository<Usuarios> = AppDataSource.getRepository(Usuarios)

    const findUser : Usuarios|null = await userRepository.findOne({
        where:{
            id:userId
        }
    })
    if(!findUser){
        throw new AppError("Usuário não encontrado", 404)
    }

    await userRepository.remove(findUser)

}