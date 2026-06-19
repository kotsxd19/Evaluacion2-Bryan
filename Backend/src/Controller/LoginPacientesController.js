import bcrypt from "bcryptjs"
import jsonwebtoken from "jsonwebtoken"

import pacientes from "../models/pacientes,js"

import { config } from "../../config.js"

const loginPacienteController = {}

loginPacienteController.Login = async (req, res) => {
    try{
        const {email, password} = req.body
        const userFound = await pacientes.findOne({email})
        if(!userFound){
            return res.status(404).json({message: "paciente no encontrado"})
        }
        if(userFound.timeOut && userFound.timeOut > Date.now()){
            return res.status(403).json({message: "cuenta bloqueada"})
        }
        const isMatch = await bcrypt.compare(password, userFound.password)
        if(!isMatch){
            userFound.loginAttempts = ( userFound.loginAttempts || 0) + 1
        
        
        if(userFound.loginAttempts >= 5){
            userFound.timeOut = Datenow() + 15 * 60 * 1000;
            await userFound.save()
            return res.status(403).json({message: "cuenta bloqueda"})
           }



            return res.status(403).json({message: "Contraseña incorrecta"})

    }
      userFound.loginAttempts= 0;
        userFound.timeOut = null;
        await userFound.save();

            const token = jsonwebtoken.sign({
            id: userFound._id, userType: "customer"},
            config.JWT.secret,
        {expiresInd: "30d"})

        res.cookie("authCookie",token)
        return res.status(200).json({messsage: "Login exitoso"})

    }catch(error){
        console.log("error" + error)
            return res.status(500).json({message: "Internal server error"})
    }
}


export default loginPacienteController

