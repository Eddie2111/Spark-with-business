import React, { MouseEventHandler } from "react";
import { signIn } from "next-auth/react";


const SignupButton: React.FC = () => {
    const handleSignIn: MouseEventHandler<HTMLButtonElement> = async (event) => {
        await signIn();
      };

    return (
        <button className="block w-32 bg-blue-500 hover:bg-blue-700 shadow-lg hover:shadow-xl mx-auto px-auto rounded-xl text-white font-bold duration-300 my-5 h-7" 
            onClick={handleSignIn}>
            Sign Up
        </button>
    );
};

export default SignupButton;
