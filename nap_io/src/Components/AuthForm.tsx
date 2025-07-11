"use client";
import { useRouter } from 'next/navigation';
import React, { useTransition } from 'react'
import { CardContent } from './ui/card';
import { Label } from './ui/label';
import { Input } from './ui/input';

type Props = {
  type: 'login' | 'signup';
}

function AuthForm({type}:Props) {
    const isLoginForm = type === 'login';
    const router = useRouter(); //next/navigation hook for navigation
    const {toast} = useToast(); // Assuming you have a toast context for notifications
    const [isPending, startTransition] = useTransition();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        console.log("form submitted", formData);
    };
  return (
    <form onSubmit={handleSubmit}>
        <CardContent>
            <div className='flex flex-col space-y-1.5'>
                <Label htmlFor='email'></Label>
                <Input
                id='email'
                name='email'
                placeholder="Enter your email"
                type='email'
                required
                disabled={isPending}
                />
            </div>

            <div className='flex flex-col space-y-1.5'>
                <Label htmlFor='email'></Label>
                <Input
                id='email'
                name='email'
                placeholder="Enter your email"
                type='email'
                required
                disabled={isPending}
                />
            </div>
        </CardContent>
    </form>
  )
}

export default AuthForm;
