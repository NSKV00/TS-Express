import {z} from "zod"
import { returnUserSchema } from "./usuarios.schemas"

export const craetePostsSchema = z.object({
    title:z.string(),
    content:z.string(),
    usuario: returnUserSchema.pick({id:true})
})
export const returnPostSchema = craetePostsSchema.extend({
    id: z.number()
})

export type CreatePost = z.infer<typeof craetePostsSchema>
export type Post = z.infer<typeof returnPostSchema>