

import {Router} from "express"
//import { connection } from "../db.js"
import { validateDataMiddleware } from "../middleware/validateData.middleware"
//import { createLoginSchema } from "../schemas/login.schemas.js"
import jwt from "jsonwebtoken"
import {compare} from "bcryptjs"
import { createLoginSchema } from "../schemas/login.schemas"
import { createLoginController } from "../controllers/login.controllers"
export const loginRoutes = Router()

loginRoutes.post("",validateDataMiddleware(createLoginSchema),createLoginController)