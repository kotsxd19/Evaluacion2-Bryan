import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"

/*import ejemploRouter from './src/routers/ejemplo.js' */
import EspecialidadesRouter from './src/router/especialidades.js'
import pacienteRegistrerRouter from './src/router/pacienteRegistrer.js'
import logoutRouter from './src/router/logout.js'

const app = express()

app.use(cors({
    origin: ["http://localhost:5173","http://localhost:5174"],
    credentials: true
}))

app.use(cookieParser())

app.use(express())
/*app.use("api/ejemplo", ejemploRouter) */
app.use("api/especialidades", EspecialidadesRouter)
app.use("api/pacienteRegistrer", pacienteRegistrerRouter)
app.use("api/logout", logoutRouter)


export default app

