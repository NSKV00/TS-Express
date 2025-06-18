import { Repository } from "typeorm";
import { Post, returnPostSchema} from "../schemas/posts.schemas"
import { Posts } from "../entities/posts.entitie"
import { AppDataSource } from "../data-source";
import { AppError } from "../errors";

export const getPostByIdService=async(postId:number):Promise<Post>=>{
    const postRepository:Repository<Posts> = AppDataSource.getRepository(Posts)

    const findPost:Posts|null = await postRepository.findOne({
        where:{
            id:postId
        }
    })
    if(!findPost){
        throw new AppError("Post não encontrado",404)
    }
    const user = returnPostSchema.parse(findPost)
    return user
}