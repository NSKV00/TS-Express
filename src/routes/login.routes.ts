

import {Router} from "express"
//import { connection } from "../db.js"
import { validateDataMiddleware } from "../middleware/validateData.middleware.js"
//import { createLoginSchema } from "../schemas/login.schemas.js"
import jwt from "jsonwebtoken"
import {compare} from "bcryptjs"
import { createLoginSchema } from "../schemas/login.schemas.js"
import { createLoginController } from "../controllers/login.controllers.js"
export const loginRoutes = Router()

loginRoutes.post("",validateDataMiddleware(createLoginSchema),createLoginController)