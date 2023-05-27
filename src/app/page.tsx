"use client";
import { Button } from '@chakra-ui/react'
import dynamic from 'next/dynamic';

const SignupButton = dynamic(() => import('../components/Auth/Button.Signin'), { ssr: false });
const SignoutButton = dynamic(() => import('../components/Auth/Button.Logout'), { ssr: false });
const SignupForm = dynamic(() => import('../components/Auth/Form.Signup'), { ssr: false });
import Test from '@/components/Test/Test.Component';

export default function Home() {
  return (
    <div>
      <Button colorScheme='blue'>Button</Button>
      <Test />
    </div>
  )
}