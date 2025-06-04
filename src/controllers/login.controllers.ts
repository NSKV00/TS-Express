import { Request, Response } from "express";
import { CreateLogin } from "../schemas/login.schemas";
import { createLoginService } from "../services/createLogin.service";

export const createLoginController=async(req:Request,res:Response):Promise<Response>=>{

    const loginData:CreateLogin=req.body
    const token:string = await createLoginService(loginData)

    return res.status(200).json({token:token})

}