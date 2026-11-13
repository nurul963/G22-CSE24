import { User } from "../models/user.model.js";
import bcrypt from 'bcryptjs'
export const register=async(req,resp)=>{
    try {
        const {name,email,password}=req.body;
        if(!name || !email || !password){
            return resp.status(400).json({
                message:"Feild cannot be empty",
                success:false
            })
        }
        const hashPassword=await bcrypt.hash(password,10);
        const user=await User.create({name,email,password:hashPassword});
        await user.save();
        return resp.status(201).json({
            message:"Registration success",
            success:true
        })
    } catch (error) {
       return resp.status(500).json({
        message:error.message,
        success:false
       }) 
    }
}