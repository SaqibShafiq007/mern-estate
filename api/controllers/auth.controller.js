import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import userModel from "../models/user.model.js";

export const signUp = async(req,res,next) =>{

    const {username,email,password} =  req.body;

    try{

        const existingUser = await userModel.findOne({email})

        //if user not exist then store password
        const hasPassword = await bcrypt.hash(password,10);

        //create user for db
        const user = new userModel({username,email,password: hasPassword})

        await user.save()
       
        return res.json({ success: true });


    }
    catch(error){
        next(error);
    }
}