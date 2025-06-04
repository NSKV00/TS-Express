import 'express-async-errors'

import express, { Application } from "express"
import { usuariosRoutes } from "./routes/usuarios.routes"
import { handleErrors } from "./errors"
const app:Application = express()

app.use(express.json())
app.use("/usuarios",usuariosRoutes)


app.use(handleErrors)
export default app