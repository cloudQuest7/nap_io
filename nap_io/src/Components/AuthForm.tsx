"use client";
import { useRouter } from 'next/navigation';
import React, { useTransition } from 'react'
import { CardContent } from './ui/card';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { toast } from 'sonner';

type Props = {
  type: 'login' | 'signup';
}

function AuthForm({type}:Props) {
    const isLoginForm = type === 'login';
    const router = useRouter();

    const [isPending, startTransition] = useTransition();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        console.log("form submitted", formData);
    };
  return (
    <form onSubmit={handleSubmit}>
        <CardContent className='grid w-full items-center gap-4'>
            <div className='flex flex-col space-y-1.5'>
                <Label htmlFor='email'>Email</Label>
                <Input
                id="email"
                name="email"
                placeholder="Enter your email"
                type="email"
                required
                disabled={isPending}
                />
            </div>

            <div className='flex flex-col space-y-1.5'>
                <Label htmlFor='email'>Password</Label>
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
