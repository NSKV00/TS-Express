import { DeepPartial } from "typeorm"
import {z} from "zod"

export const createUserSchema = z.object({
    name: z.string().min(2,"nome é obrigatório"),
    email: z.string().email(),
    password: z.string()
})

export const returnUserSchema = createUserSchema.extend({
    id: z.number()
}).omit({password:true})

export const returnAllUsersSchema = returnUserSchema.array()
export const updateUserSchema = createUserSchema.partial()

export type CreateUser = z.infer<typeof createUserSchema>
export type ReturnUser = z.infer<typeof returnUserSchema>
export type ReturnUsers = z.infer<typeof returnAllUsersSchema>
export type updateUser = DeepPartial<CreateUser>
// export interface iCreateUser {
//     name:string,
//     email:string,
//     password: string
// }
// export type tCreateUser ={
//     name: string,
//     email: string,
//     password: string
// }