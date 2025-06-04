// import { connection } from "../db.js"

// export const userRoutesdelete = async(req,res)=>{
//     const userId = parseInt(req.user.id)
//     const postId = parseInt(req.params.id)
//     const textUser = 'select * from usuarios where id = $1'

//     const valuesId = [userId]
   
//     const findUser = await connection.query(textUser,valuesId)
//       if(findUser.rows.length === 0){
//        return res.status(404).json({message:"Usuário não encontrado"})
//     }
//     const textPost = 'select * from post where id = $1'
//      const valuesText = [postId]
//     const deleteUsuarios = 'delete from usuarios where id = $1'
//     const deletePost = 'delete from post where id = $1'
//     const deleteText = [deleteUsuarios,deletePost]
//     await connection.query(deleteUsuarios,deletePost,valuesId,valuesText)
//     return res.status(204).send()
// }

// import { connection } from "../db.js"

// export const getUserByIdMiddleware=async(req,res,next)=>{
//     const userId = parseInt(req.params.id)
//     const text = `SELECT * FROM usuarios where id = $1`
//     const values = [userId]
//     const resDb = await connection.query(text,values)
//     if(resDb.rows.length===0){
//         return res.status(404).json({message:"Usuário não encontrado"})
//     }
// next()


// userRoutes.delete("/:id",async (req,res)=>{
//     const text = 'select * from usuarios where id = $1'
//     const values = [req.params.id]
//     const findUser = await connection.query(text,values)
//       if(findUser.rows.length === 0){
//        return res.status(404).json({message:"Usuário não encontrado"})
//     }
//     const deleteText = 'delete from usuarios where id = $1'
//     await connection.query(deleteText,values)
//     return res.status(204).send()
// })