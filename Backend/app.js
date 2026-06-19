import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"

/*import ejemploRouter from './src/routers/ejemplo.js' */
import EspecialidadesRouter from './src/router/especialidades.js'
import pacienteRegistrerRouter from './src/router/pacienteRegistrer.js'
import logoutRouter from './src/router/logout.js'
import LoginPacienteRouter from './src/router/LoginPaciente.js'
import pacienteRouter from './src/router/pacienteController.js'
import citasRouter from './src/router/citas.js'
import expedienteRouter from './src/router/expediente.js'
import equipoMedicoRouter from './src/router/equipos.js'


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
app.use("api/loginpaciente", LoginPacienteRouter)
app.use("api/paciente", pacienteRouter)
app.use("api/citas", citasRouter)
app.use("api/expediente", expedienteRouter)
app.use("api/equiposMedicos", equipoMedicoRouter)





export default app

