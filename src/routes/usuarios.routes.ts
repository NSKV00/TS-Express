import { Router } from "express";
import { createUserController, deleteUserController, getAllUsersController } from "../controllers/usuarios.controllers";
import { validateDataMiddleware } from "../middleware/validateData.middleware";
import { createUserSchema, updateUserSchema } from "../schemas/usuarios.schemas";
import { validateTokenMiddleware } from "../middleware/validateToken.middleware";

export const usuariosRoutes:Router = Router()

usuariosRoutes.post("",validateDataMiddleware(createUserSchema), validateTokenMiddleware, createUserController)
usuariosRoutes.get("",getAllUsersController)
usuariosRoutes.delete("/:id",validateTokenMiddleware, deleteUserController)
usuariosRoutes.patch("/:id",validateTokenMiddleware, validateDataMiddleware(updateUserSchema))
usuariosRoutes.get("retrieve",)
usuariosRoutes.get("/:id",)