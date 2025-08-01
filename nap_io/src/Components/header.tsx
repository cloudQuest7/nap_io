import React from "react";
import Link from "next/link";
import Image from "next/image";
import { shadow } from "@/app/styles/utiles";
import { Button } from "./ui/button";
import { DarkModeToggle } from "./DarkModeToggle";
import LogOutButton from "./LogOutButton";

function Header() {
  const user = null; // Replace with actual user authentication logic
  return (
    <header
      className="relative flex h-24 w-full items-center justify-between bg-popover px-3 sm:px-8 header-shadow"
    >
      <Link className="flex flex-item gap-2" href="/">
        <Image
          src="/napio.png"
          height={50}
          width={50}
          alt="Logo"
          className="rounded-full"
          priority
        />
        <h1 className="flex flex-col pb-1 text-2xl font-semibold leading-6">
          Nap.io <span>Notes</span>
        </h1>
      </Link>

      <div className="flex gap-4">
        {user ? (
        <LogOutButton/>
        ) : (
          <>
          <Button asChild type="button" title="Sign Up" className="hidden sm:block">
            <Link href="/sign-up">Sign Up</Link>
          </Button>
          <Button asChild type="button" variant="outline" title="Login">
            <Link href="/login">Login</Link>
          </Button>
          </>
        )}

        <DarkModeToggle />
      </div>
    </header>
  );
}

export default Header