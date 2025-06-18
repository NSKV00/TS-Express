import { Request, Response } from "express";
import { iCreateComment, iReturnAllComment, iReturnComment } from "../schemas/comments.schemas";
import { createCommentService } from "../services/createComment.service";
import { getCommentsByIdPostService } from "../services/getCommentsByPostId.service";

export const createCommentController=async(req:Request,res:Response):Promise<Response>=>{
    const commentData:iCreateComment = req.body
    const userId:number =req.user.id
    const postId:number = parseInt(req.params.id)
    const comment:iReturnComment = await createCommentService(postId,userId,commentData)
    return res.status(201).json(comment)

}
export const getCommentsByPostIdController=async(req:Request,res:Response):Promise<Response>=>{

    const postId:number = parseInt(req.params.id)
    const comments:iReturnAllComment = await getCommentsByIdPostService(postId)
    return res.status(200).json(comments)
}