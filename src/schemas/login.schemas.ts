import { DeepPartial } from "typeorm"
import{z} from "zod"

export const createLoginSchema = z.object({
    email: z.string().email(),
    password: z.string()
})

export const returnUserSchema = createLoginSchema.extend({
    id: z.number()
}).omit({password:true})

export type CreateLogin = z.infer<typeof createLoginSchema>
export type ReturnUser = z.infer<typeof returnUserSchema>
