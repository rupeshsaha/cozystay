"use client"
import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { useAuth } from '@/context/AuthContext';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Loader2 } from 'lucide-react';

const SignupComponent = ({triggerButton}) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const {signup} = useAuth()

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);

      await signup(fullName, email, password);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <Dialog defaultOpen={!triggerButton}>
      { triggerButton &&
        <DialogTrigger asChild>
          <Button variant="outline">Signup</Button>
        </DialogTrigger>
      }

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Sign up to CozyStay</DialogTitle>
        </DialogHeader>
        <form method="post" onSubmit={handleSignup}>
          <div className="grid w-full items-center gap-1.5 mt-4">
            <Label htmlFor="fullname">Full Name</Label>
            <Input
              required
              type="text"
              id="fullname"
              placeholder="John Doe"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="grid w-full items-center gap-1.5 mt-4">
            <Label htmlFor="signup-email">Email</Label>
            <Input
              required
              type="email"
              id="signup-email"
              placeholder="one@one.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="grid w-full items-center gap-1.5 mt-4">
            <Label htmlFor="signup-password">Password</Label>
            <Input
              required
              minLength="6"
              type="password"
              id="signup-password"
              placeholder="*****"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <DialogFooter>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-4"
            >
              {isSubmitting ? <Loader2 className="animate-spin" /> : ""}
              Signup
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SignupComponent