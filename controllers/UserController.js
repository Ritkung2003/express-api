import prisma from "../prisma/prisma.js";
import bcrypt from "bcrypt";

// Register
const UserSignUp = async (req, res) => {
    try {
        const {username, email, password} = req.body;
        const hashedPassword = await bcrypt.hashSync(password, 10);
        await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
            }
        })
                    .then( result => res.status(200).json(result))
                    .catch( errors => res.status(400).json({ message: errors.message}));
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}


// Login
const UserSignIn = async (req, res) => {
    try {
        
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}


// Logout
const UserSignOut = async (req, res) => {
    try {
        
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export { UserSignUp, UserSignIn, UserSignOut }