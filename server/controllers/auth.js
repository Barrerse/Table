import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';

/* Register a new user */
export const register = async (req, res) => {
    try {
        const { 
            firstname, 
            lastname, 
            email, 
            password,
            picturePath,
            friends,
            location,
            occupation,
         } = req.body;

         const salt = await bcrypt.genSalt();
         const passwordHash = await bcrypt.hash(password, salt);
    }
    catch (error) {
    }
}