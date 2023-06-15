import dotenv from "dotenv"
import { comparePassword, hashPassword } from "../helper/authHelper.js"
import userModel from "../models/userModel.js"
import jwt from "jsonwebtoken"

dotenv.config()

export const registerController = async (req, res) => {
    try {
        const { name, email, password } = req.body
        if (!name) {
            return res.send({ message: "Name Is Required" })
        }
        if (!email) {
            return res.send({ message: "Email Is Required" })
        }
        if (!password) {
            return res.send({ message: "Password Is Required" })
        }
        //Existing User Check
        const existingUser = await userModel.findOne({ email })
        if (existingUser) {
            return res.send({
                success: false,
                message: "Email is Already Registered With Another Account"
            })
        }

        // HashPassword using bcrypt function created in Helper(authHelper.js)
        const hashedPassword = await hashPassword(password)

        // Account Create
        const account = await userModel({
            name,
            email,
            password: hashedPassword
        }).save()
        res.send({
            success: true,
            message: "Account created successfully",
            account
        })

    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Error in Register controller",
        })
    }
}

export const loginController = async (req, res) => {
    try {

        const { email, password } = req.body

        if (!email || !password) {
            return (
                res.status(500).send({
                    success: false,
                    message: "All Fields Are Required"
                })
            )
        }

        const user = await userModel.findOne({ email })

        const match = await comparePassword(password, user.password)
        if (!match) {
            return (
                res.status(400).send({
                    success: false,
                    message: "Incorrect Password"
                })
            )
        }

        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' })

        res.status(200).send({
            success: true,
            message: 'Login successful',
            user: {
                name: user.name,
                email: user.email,
                role: user.role,
            },
            token
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: true,
            message: "Error in login controller",
            error
        })
    }
}
