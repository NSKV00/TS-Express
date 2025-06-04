import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { Usuarios } from "../entities/usuarios.entitie"
import {  CreateUser, ReturnUser, returnUserSchema } from "../schemas/usuarios.schemas"
import { AppError } from "../errors"

export const createUserService=async(userData:CreateUser):Promise<ReturnUser>=>{
    const userRepository: Repository<Usuarios> = AppDataSource.getRepository(Usuarios)
    
    const findUser: Usuarios | null = await userRepository.findOne({
        where:{
            email:userData.email
        },
        
    })
    if(findUser){
        throw new AppError("e-mail já cadastrado",409)
    }
    const createUser = userRepository.create(userData)
    await userRepository.save(createUser)
    const user = returnUserSchema.parse(createUser)
    return user

}