import { Repository } from "typeorm"
import { Comments } from "../entities/comments.entitie"
import { AppDataSource } from "../data-source"
import { returnAllCommentSchema } from "../schemas/comments.schemas"

export const getCommentsByIdPostService=async(postId:number)=>{

    const commentRepository:Repository<Comments> = AppDataSource.getRepository(Comments)

    const findComments:Comments[]|[] =await commentRepository.find(
    {
        where:{
            post:{
                id:postId
            }
        },
        relations:{
            post:true,
            usuario:true
        }
    }
    )
    const posts = returnAllCommentSchema.parse(findComments)
    return posts

}