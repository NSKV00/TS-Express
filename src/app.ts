import 'express-async-errors'
import express, { Application } from "express"
import { usuariosRoutes } from "./routes/usuarios.routes"
import { handleErrors } from "./errors"
import { postsRoutes } from './routes/posts.routes'
import { loginRoutes } from './routes/login.routes'
import cors from "cors"
const app:Application = express()

app.use(cors())
app.use(express.json())
app.use("/usuarios",usuariosRoutes)
app.use("/posts",postsRoutes)
app.use("/login",loginRoutes)

app.use(handleErrors)
export default app

// import 'express-async-errors'

// import express, { Application } from "express"
// import { usuariosRoutes } from "./routes/usuarios.routes"
// import { handleErrors } from "./errors"
// const app:Application = express()

// app.use(express.json())
// app.use("/usuarios",usuariosRoutes)


// app.use(handleErrors)
// export default app