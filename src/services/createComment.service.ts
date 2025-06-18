import { Repository } from "typeorm";
import { iCreateComment, returnCommentSchema } from "../schemas/comments.schemas";
import { AppDataSource } from "../data-source";
import { Comments } from "../entities/comments.entitie";

export const createCommentService=async(postId:number,userId:number,commentData:iCreateComment)=>{

    const commentRepository:Repository<Comments> = AppDataSource.getRepository(Comments)

    const createComment:Comments = commentRepository.create({
        ...commentData,
        usuario:{
            id:userId
        },post:{
            id:postId
        }
    }) 
    await commentRepository.save(createComment)

    const comment = returnCommentSchema.parse(createComment)

    return comment

}