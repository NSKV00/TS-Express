import { Router } from "express";
import { validateDataMiddleware } from "../middleware/validateData.middleware";
import { craetePostsSchema } from "../schemas/posts.schemas";
import { createPostController, deletePostController, getAllPostsController, postIdController } from "../controllers/posts.controllers";
import { validateTokenMiddleware } from "../middleware/validateToken.middleware";

export const postsRoutes:Router = Router()

postsRoutes.post("",validateDataMiddleware(craetePostsSchema), validateTokenMiddleware,createPostController)
postsRoutes.get("",getAllPostsController)
postsRoutes.patch("/:id",validateTokenMiddleware)
postsRoutes.delete("/:id",validateTokenMiddleware, deletePostController)
postsRoutes.get("/user/:userid",)
postsRoutes.get("/:id", postIdController)





