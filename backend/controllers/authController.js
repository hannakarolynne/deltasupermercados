const  bcrypt = require ('bcrypt')

const jwt = require ('jsaonwebtoken')

const userModel = require('../models/userModels.js')

const register = async (req,res) =>{
    const {name, email, password} = req.body

    try {
        const userExists = userModel.findUserByEmail(email) //userModel.js
        if (userExists) return res.status(400).json({message: "Email já cadastrado"})
        const passwordHash = await bcrypt.hash(password, 10)

        res.status(201).json({message: 'Usuário criado', userId})

    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const login = async (req, res) => {
    const {email, password} = req.body

    try{
        const user = await userModel.findUserByEmail(email)
        if (!user) return res.status(400).json({message: 'Usuário ou senha inválidos'})

        const isPasswordvalid = await bcrypt.compare(password, user.password)
        if (!isPasswordvalid) return res.status(400).json ({message: 'Usuário ou senha inválidos'})

        const token = jwt.sign({id:user.id}, process.env.JWT, {expiresIn: '1h'})
        console.log(token)
        res.json({token})

    }
    catch {
        res.status(500).json({error: error.message})
    }
}

module.exports = {register, login}