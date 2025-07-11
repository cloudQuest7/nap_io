"use client";
import React, { useState } from 'react'
import { Button } from './ui/button';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
// import { useToast } from "@/components/ui/use-toast";

function LogOutButton() {
  const {toast} = useToast(); // Assuming you have a toast context for notifications
  const router = useRouter(); // Assuming you are using Next.js router for navigation
  const [loading, setLoading] = useState(false);
  const handleLogout =async () => {
    setLoading(true)
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate logout delay

    const errorMessage = null;
    if (errorMessage) {
      toast({
        title: "Logout Failed",
        description: "You have been successfully logged out.",
        variant: "success",
      });
      router.push("/");
    } else {
      toast({
        title: "Logout Failed",
        description: errorMessage,
        variant: "destructive",
      });
    }
    setLoading(false);
  return (
    <Button
      variant="outline"
      onClick={handleLogout}
      disabled={loading}
      className="w-24"
    >
      {loading ? <Loader2 className="animate-spin" /> : "Logout"}
    </Button>
  );
}
}

export default LogOutButton;


function useToast(): { toast: any; } {
  throw new Error('Function not implemented.');
}


