import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Posts } from "../entities/posts.entitie";
import {deleteUserController} from "../controllers/usuarios.controllers"
import { CreateLogin } from "../schemas/login.schemas";
import { AppError } from "../errors";
import {compare} from "bcryptjs"
import jwt from "jsonwebtoken"
import { boolean, number } from "zod";
import { Post } from "../schemas/posts.schemas";

export const deletePostService = async(postId:number):Promise<void>=>{
    const userRepository : Repository<Posts> = AppDataSource.getRepository(Posts)

    const findPost : Posts|null = await userRepository.findOne({
        where:{
            id:postId
        }
    })
    if(!findPost){
        throw new AppError("Usuário não encontrado", 404)
    }

    await userRepository.remove(findPost)

}