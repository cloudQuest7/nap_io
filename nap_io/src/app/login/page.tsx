import React from 'react'
import {Card, CardHeader, CardTitle}from "@/Components/ui/card"; 
import AuthForm from "@/Components/AuthForm";

function LoginPage() {
  return (
    <div className='mt-20 flex-1  flex-col items-center'>
       <Card className="w-full max-w-md p-6">
        <CardHeader className='mb-4'>
            <CardTitle className='text-center text-xl'> Login </CardTitle>
        </CardHeader>
        <AuthForm type="login" />
        </Card>
       
    </div>
  )
}

export default LoginPage;