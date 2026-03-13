import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import userModel from "../models/user.model.js";

export const signUp = async(req,res) =>{

    const {username,email,password} =  req.body;

    if(!username||!email||!password){
        return res.json ({
            success:false,
            message : 'missing Details'
        })
    }

    try{

        const existingUser = await userModel.findOne({email})

        if(existingUser){
            return res.json ({
            success:false,
            message : 'User Already exist!'
        })
        }

        //if user not exist then store password
        const hasPassword = await bcrypt.hash(password,10);

        //create user for db
        const user = new userModel({username,email,password: hasPassword})

        await user.save()

       
        
      

       
        return res.json({ success: true });


    }
    catch(error){
        return res.json ({
            success:false,
            message : error.message
        })
    }






}