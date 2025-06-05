import { Request, Response } from "express"
import { createUserService } from "../services/createUser.service"
import { getAllUsersService } from "../services/getAllUsers.service"
import { ReturnUser } from "../schemas/usuarios.schemas"
import { deleteUserService } from "../services/deleteUser.service"


export const createUserController = async(req:Request,res:Response):Promise<any> =>{
    const userData = req.body
    const user:ReturnUser = await createUserService(userData)
    return  res.status(201).json(user)
    
}
export const getAllUsersController=async(req:Request,res:Response):Promise<any>=>{
    const users = await getAllUsersService()
    return res.status(200).json(users)
}
export const deleteUserController=async(req:Request,res:Response):Promise<Response>=>{
    const userId:number = parseInt(req.params.id)
    await deleteUserService(userId)
    return res.status(204).send()
}

//export { deleteUserService }
