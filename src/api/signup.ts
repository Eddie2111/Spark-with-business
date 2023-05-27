"use server";
import mongoose from "mongoose";
import Mongo from "@/model/mongo";
import User from "../model/schemas/User";

interface SignupData {
    name: string;
    email: string;
    password: string;
}

export default async function HandleSignup(data:SignupData){
    await Mongo();
    const user = new User({
        serial: Math.random().toString(36).substr(2, 9),
        name: data.name.toString(),
        email: data.email.toString(),
        password: data.password.toString(),
    });
    await user.save().then((result) => { console.log(result); }).catch((err) => { console.log(err); });
    mongoose.disconnect();
    return user;
}