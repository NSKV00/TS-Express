import { Router } from "express";
import { validateDataMiddleware } from "../middleware/validateData.middleware";
import { craetePostsSchema } from "../schemas/posts.schemas";
import { createPostController, deletePostController, getAllPostsController, postIdController } from "../controllers/posts.controllers";
import { validateTokenMiddleware } from "../middleware/validateToken.middleware";
import { createCommentController, getCommentsByPostIdController } from "../controllers/comment.controllers";
import { createCommentSchema } from "../schemas/comments.schemas";
import { userUseridController } from "../controllers/postUserId.controller";

export const postsRoutes:Router = Router()

postsRoutes.post("",validateDataMiddleware(craetePostsSchema), validateTokenMiddleware,createPostController)
postsRoutes.get("",getAllPostsController)
postsRoutes.patch("/:id",validateTokenMiddleware)
postsRoutes.delete("/:id",validateTokenMiddleware, deletePostController)
postsRoutes.get("/user/:userid",validateTokenMiddleware, userUseridController)
postsRoutes.get("/:id", postIdController)

postsRoutes.get("/comment/:id",getCommentsByPostIdController)
postsRoutes.post("/comment/:id",validateTokenMiddleware,validateDataMiddleware(createCommentSchema),createCommentController)