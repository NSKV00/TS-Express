import { Repository } from "typeorm";
import { CreatePost, Post, returnPostSchema } from "../schemas/posts.schemas";
import { AppDataSource } from "../data-source";
import { Posts } from "../entities/posts.entitie";
import { Usuarios } from "../entities/usuarios.entitie";

export const createPostService=async(postData:CreatePost,userId:number):Promise<Post>=>{

    const postRepository:Repository<Posts> = AppDataSource.getRepository(Posts)
    const userRepository:Repository<Usuarios> = AppDataSource.getRepository(Usuarios)

    const findUser:Usuarios | null = await userRepository.findOne({
        where:{
            id: userId
        }
    })
    const createPost:Post = postRepository.create({
        ...postData,
        usuario:findUser!
    })
    await postRepository.save(createPost)

    const post = returnPostSchema.parse(createPost)
        return post
}