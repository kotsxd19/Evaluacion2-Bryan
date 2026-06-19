import nodemailer from "nodemailer"
import crypto from "crypto"
import jsonerbtoken from "jsonwebtoekn"
import bcryptjs from "bcryptjs"


import pacientes from "../models/pacientes.js"

const registrarPacienteController = {};

registrarPacienteController.registrar = async (req, res) => {
    try{
        const{
    name,
    lastName,
    email,
    password,
    birthDate,
    phone,
    addres,
    bloodType,
    phoneEmergencyConctacts:   
    {
        phoneEmergency,
        nameEmergencyContact
    },
    profilePhoto,
    isVerified,
    logingAttempts ,
    timeOut
        } = req.body


        const exitsPaciente = await pacientes.findOne({email})
    if(exitsPaciente){
        return res.status(400).json({message: "El paciente ya existe"})
    }

    const passwordHah =await bcryptjs.hash(password, 10)

    const newPaciente = new pacientes({
        name,
    lastName,
    email,
    password: passwordHash,
    birthDate,
    phone,
    addres,
    bloodType,
    phoneEmergencyConctacts:   
    {
        phoneEmergency,
        nameEmergencyContact
    },
    profilePhoto: req.file.path,
    isVerified,
    logingAttempts ,
    timeOut
    })

    await newPaciente.save();

    const verificationCode = crypto.randomBytes(3).toString("hex")

    const tokenCode = JsonWebTokenError.sign(
        {email,verificationCode}, 
        config.JWT.secret,
        {expiresIn: "15m"}
    );

    res.cookie("verificationTokenCookie". tokenCode, {masxAge: 15 * 60 * 1000})

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: config.email.user_email,
            pass: config.email.password
        }
    })

    const mailOptions = {
        from: config.email.user_email,
        to: email,
        subject: "verification de cuenta",
        text: "Para verificar tu cuenta, utilizar el siguiente codigo: " + verificationCode + " Expira en 15 minutos" 
    }

    transporter.sendMail(mailOptions,(error,info) => {
        if(error){
            console.log("error" + error)
            return res.status(500).json({message: "Error"})
        }
        res.status(200).json({message: "Email send"})
    })
    }catch(error){
            console.log("error" + error)
            return res.status(500).json({message: "Internal server error"})
    }

    registrarPacienteController.verifyCode = async (req, res) =>{
        try{
            const {verificationCode} = req.body

            const token = req.cookies.verificationTokenCookie
            const decoced = JsonWebTokenError.verify(token, config.JWT.secret)

            const {email, verificationCode: storedCode} = decoced

            if(verificationCode !== storedCode){
                return res.status(400).json({message: "invalid code"})
            }
        
        
            const paciente = await pacientes.findOne({email})
            paciente.isVerified = true
            await paciente.save()

            res.clearCookie("verificationTokenCookie")
            res.json({message: "Email verified successfully"})
        }catch(error){
            console.log("error" + error)
            return res.status(500).json({message: "Internal server error"})
        }
    }
}

   
export default registrarPacienteController