import { Repository } from "typeorm"
import { Usuarios } from "../entities/usuarios.entitie"
import { AppDataSource } from "../data-source"
import { returnAllUsersSchema, ReturnUser, ReturnUsers } from "../schemas/usuarios.schemas"

export const getAllUsersService=async():Promise<ReturnUsers>=>{
    const usersRepository:Repository<Usuarios> = AppDataSource.getRepository(Usuarios)

    const findUsers = await usersRepository.find()
    const users = returnAllUsersSchema.parse(findUsers)
    return users

}