import React, { MouseEventHandler } from "react";
import { signOut } from "next-auth/react";


const SignoutButton: React.FC = () => {
    const handleSignIn: MouseEventHandler<HTMLButtonElement> = async (event) => {
        await signOut();
      };

    return (
        <button className="block w-32 bg-blue-500 hover:bg-blue-700 shadow-lg hover:shadow-xl mx-auto px-auto rounded-xl text-white font-bold duration-300 my-5 h-7" 
            onClick={handleSignIn}>
            Log out
        </button>
    );
};

export default SignoutButton;
