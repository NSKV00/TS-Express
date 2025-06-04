import { Repository } from "typeorm";
import { CreatePost, Post, returnPostSchema } from "../schemas/posts.schemas";
import { AppDataSource } from "../data-source";
import { Posts } from "../entities/posts.entitie";

export const createPostService=async(postData:CreatePost):Promise<Post>=>{

    const postRepository:Repository<Posts> = AppDataSource.getRepository(Posts)

    const createPost  =postRepository.create(postData)
    await postRepository.save(createPost)

    const post = returnPostSchema.parse(createPost)

    return post
}