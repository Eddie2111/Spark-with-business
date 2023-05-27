"use client";
import React from 'react';
import HandleSignUp from '@/api/signup';

const Test: React.FC = ()=>{
    const SubmitHandle = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const target = event.target as typeof event.target & {
            name: { value: string };
            email: { value: string };
            password: { value: string };
        };
        const name = target.name.value;
        const email = target.email.value;
        const password = target.password.value;
        const data = { name, email, password };
        console.log(data)
        try{
            const response = await HandleSignUp(data);
            console.log(response)
        }
        catch(error){
            console.log(error)
        }
        
        };

    return(
        <div className="w-[330px] md:w-[50%] h-[30rem] mx-auto px-auto shadow-xl mb-20">
            <form onSubmit={SubmitHandle}>
                <div className="sm:mx-auto sm:w-full sm:max-w-sm border-black">
                    <input type="text" name="name" placeholder="Enter your name" className="block w-full rounded-md px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                    <input type="text" name="email" placeholder="Enter your name" className="block w-full rounded-md px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                    <input type="text" name="password" placeholder="Enter your name" className="block w-full rounded-md px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                    <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 duration-300 focus-visible:outline-indigo-600">Submit</button>
                </div>
            </form>
        </div>
    )
}
export default Test;