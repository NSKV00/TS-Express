import {z} from "zod"
import { returnUserSchema } from "./usuarios.schemas"

export const createLoginSchema = z.object({
    email: z.string().email(),
    password:z.string()
})
export const returnLoginSchema = z.object({
    usuario:returnUserSchema,
    token:z.string()
})

export type CreateLogin = z.infer<typeof createLoginSchema>
export type RetunrLogin = z.infer<typeof returnLoginSchema>

// import { DeepPartial } from "typeorm"
// import{z} from "zod"

// export const createLoginSchema = z.object({
//     email: z.string().email(),
//     password: z.string()
// })

// export const returnUserSchema = createLoginSchema.extend({
//     id: z.number()
// }).omit({password:true})

// export type CreateLogin = z.infer<typeof createLoginSchema>
// export type ReturnUser = z.infer<typeof returnUserSchema>
