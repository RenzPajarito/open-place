"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-background">
      <div className="relative hidden lg:flex items-center justify-center bg-muted p-8">
        <div className="absolute w-full h-full bg-opb dark:bg-gray-900" />
        <div className="relative z-10 text-lg w-full h-full space-y-8 flex flex-col justify-between">
          <div>
            <Link href="/" className="flex items-center gap-4">
              <Image src="/logo_icon.png" alt="logo" width={40} height={40} />
              <h1 className="text-2xl font-bold text-[#F3AA1D]">Open Place</h1>
            </Link>
          </div>
          <div className="flex justify-center gap-8">
            <div className="border px-4 py-1 rounded-lg bg-white/10">
              <h1 className="text-sm text-white/90">End-to-end encryption</h1>
              <p className="text-xs text-gray-200">
                Your data is always protected
              </p>
            </div>
            <div className="border px-4 py-1 rounded-lg bg-white/10">
              <h1 className="text-sm text-white/90">Privacy focused</h1>
              <p className="text-xs text-gray-200">
                We never share your information
              </p>
            </div>
          </div>
          <p className="text-gray-200 text-center">
            Open Place is a safe and supportive space for individuals to
            connect, share experiences, and explore new possibilities without
            compromising your privacy.
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background to-background/20" />
      </div>
      <div className="lg:p-8 my-auto">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Welcome Back
            </h1>
            <p className="text-sm">
              Enter your user ID and password to access your account
            </p>
          </div>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="userId">User ID</Label>
              <Input
                id="userId"
                type="text"
                placeholder="your-user-id"
                className="border border-[#F3AA1D]"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                className="border border-[#F3AA1D]"
                required
              />
            </div>
            <Button className="w-full bg-[#F3AA1D]" type="submit">
              Sign in
            </Button>
          </form>
          <p className="px-8 text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link
              className="underline underline-offset-4 hover:text-primary"
              href={""}
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
