import { Repository } from "typeorm";
import { iPosts, returnAllPostsSchema } from "../schemas/posts.schemas";
import { Posts } from "../entities/posts.entitie";
import { AppDataSource } from "../data-source";

export const getAllPostsService=async(offset:any|string,limit:string|any):Promise<iPosts>=>{

    const postRepository:Repository<Posts> = AppDataSource.getRepository(Posts)

    const findPosts:Posts[]|[] = await postRepository.find(
        {
            relations:{
                usuario:true
            },
            skip: offset ?? 0,
            take: limit ?? 10
        }
    )

    const posts = returnAllPostsSchema.parse(findPosts)

    return posts

}