
import { motion } from "framer-motion";
import { signIn } from "next-auth/react";
import React from "react";
import Signup from "../Types/Signup";

async function handleSignup(data:Signup){
    
    console.log('hi')
}

const SignupForm: React.FC = () => {
    const HandleSignIn = async (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        await signIn();
        };
    const handleSignup = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const target = event.target as typeof event.target & {
            email: { value: string };
            password: { value: string };
            };
        const email = target.email.value;
        const password = target.password.value;
        console.log(email)
        };

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
        <div className="w-[330px] md:w-[50%] h-[30rem] mx-auto px-auto shadow-xl mb-20">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm border-black">
            <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"/>
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSignup} className="space-y-6">
            <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">Email address</label>

                <div className="mt-2">
                <input id="email" name="email" type="email" required 
                className="block w-full rounded-md px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>

            </div>

            <div>
                <div className="flex items-center justify-between">
                <label className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                </div>
                </div>

                <div className="mt-2">
                <input id="password" name="password" type="password" required 
                className="block w-full rounded-md px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>

            </div>

            <div>
                <button type="submit" 
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 duration-300 focus-visible:outline-indigo-600">Sign Up</button>
            </div>
            </form>
            <p className="mt-10 text-center text-sm text-gray-500">
            Have account?
            <a className="font-semibold hover:text-underline leading-6 text-indigo-600 hover:text-indigo-500" onClick={HandleSignIn}> Login now</a>
            </p>

        </div>
        </div>
        </motion.div>
    );

}
export default SignupForm;
/*
    <p className="mt-10 text-center text-sm text-gray-500">
    Not a member?
    <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
    </p>
    */