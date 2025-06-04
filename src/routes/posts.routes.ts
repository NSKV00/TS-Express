import { Router } from "express";
import { validateDataMiddleware } from "../middleware/validateData.middleware";
import { craetePostsSchema } from "../schemas/posts.schemas";
import { createPostController } from "../controllers/posts.controllers";

export const postsRoutes:Router = Router()

postsRoutes.post("",validateDataMiddleware(craetePostsSchema),createPostController)