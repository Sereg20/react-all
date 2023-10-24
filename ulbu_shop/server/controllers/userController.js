const {User, Basket} = require("../models/models")
const ApiError = require("../error/ApiError")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const generateToken = (id, email, role) => {
    return jwt.sign({id, email, role}, process.env.SECRET_KEY, {expiresIn: '24h'})
}

class UserController {
    async registration(req, res, next) {
        const {email, password, role} = req.body

        if (!email || !password) {
            return next(ApiError.badRequest("Invalid email or password"))
        }

        const existingUser = await User.findOne({where: {email}})

        if (existingUser) {
            return next(ApiError.badRequest("User with such email alreay exists"))
        }

        const hashPassword = await bcrypt.hash(password, 5)
        const newUser = await User.create({email, role, password:hashPassword})
        const newBasket = await Basket.create({userId: newUser.id})
        const token = generateToken(newUser.id, newUser.email, newUser.role)

        return res.json({token})
    }

    async login(req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})

        if (!user) {
            return next(ApiError.badRequest("user with such email doesn't exist"))
        }

        const comparePassword = bcrypt.compareSync(password, user.password)

        if (!comparePassword) {
            next(ApiError.badRequest("Invalid password"))
        }

        const token = generateToken(user.id, user.email, user.role)

        return res.json({token})
    }

    async check(req, res, next) {
        const user = req.user
        const token = generateToken(user.id, user.email, user.role)
        
        return res.json({token}) 
    }
}

module.exports = new UserController()