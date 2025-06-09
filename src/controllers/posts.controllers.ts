import { Request, Response } from "express";

import { createPostService } from "../services/createPost.service";
import { CreatePost, iPosts, Post } from "../schemas/posts.schemas";
import { getAllPostsService } from "../services/getAllPosts.service";
import { deletePostService } from "../services/deletePost.servise";
import { getPostByIdService } from "../services/getPostById.service";

export const createPostController=async(req:Request,res:Response):Promise<Response>=>{

    const postData:CreatePost = req.body
    const userId = req.user.id
    const post: Post = await createPostService(postData)

    return res.status(201).json(post)
}
export const getAllPostsController=async(req:Request,res:Response):Promise<Response>=>{
    const offset = req.query.offset
    const limit = req.query.limit
    console.log(req.baseUrl,req.hostname)
    const posts:iPosts = await getAllPostsService(offset,limit)
    return res.status(200).json(posts)
}
export const deletePostController=async(req:Request,res:Response):Promise<Response>=>{
    const postId:number = parseInt(req.params.id)
    await deletePostService(postId)
     return res.status(204).send()
}
export const postIdController=async(req:Request,res:Response):Promise<Response>=>{

    const postId:number = parseInt(req.params.id)
    const post:Post = await getPostByIdService(postId)
    return res.status(200).json(post)
}