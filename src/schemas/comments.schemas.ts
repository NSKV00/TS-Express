import {z} from "zod"
import { returnPostSchema } from "./posts.schemas"
import { returnUserSchema } from "./usuarios.schemas"

export const createCommentSchema = z.object({
    content:z.string().min(5,"O comentário deve ter no mínimo 5 caracteres"),
})
export const returnCommentSchema = createCommentSchema.extend({
    id: z.number(),
    post: returnPostSchema.pick({id:true}),
    usuario: returnUserSchema.pick({id:true})
})
export const returnAllCommentSchema = returnCommentSchema.array()

export type iCreateComment = z.infer<typeof createCommentSchema>
export type iReturnComment = z.infer<typeof returnCommentSchema>
export type iReturnAllComment = z.infer<typeof returnAllCommentSchema>