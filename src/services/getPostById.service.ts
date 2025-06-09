import { Repository } from "typeorm";
import { Post, returnPostSchema} from "../schemas/posts.schemas"
import { Usuarios } from "../entities/usuarios.entitie";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors";

export const getPostByIdService=async(postId:number):Promise<Post>=>{
    const userRepository:Repository<Usuarios> = AppDataSource.getRepository(Usuarios)

    const findUser:Usuarios|null = await userRepository.findOne({
        where:{
            id:postId
        }
    })
    if(!findUser){
        throw new AppError("Usuário não encontrado",404)
    }
    const user = returnPostSchema.parse(findUser)
    return user
}