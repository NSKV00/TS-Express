import { Repository } from "typeorm";
import { ReturnUser, returnUserSchema } from "../schemas/usuarios.schemas";
import { Usuarios } from "../entities/usuarios.entitie";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors";

export const getUserByIdService=async(userId:number):Promise<ReturnUser>=>{
    const userRepository:Repository<Usuarios> = AppDataSource.getRepository(Usuarios)

    const findUser:Usuarios|null = await userRepository.findOne({
        where:{
            id:userId
        }
    })
    if(!findUser){
        throw new AppError("Usuário não encontrado",404)
    }
    const user = returnUserSchema.parse(findUser)
    return user
}