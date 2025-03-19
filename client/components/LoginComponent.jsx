"use client"
import React, { useState } from 'react'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { useAuth } from '@/context/AuthContext';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Loader2 } from 'lucide-react';

const LoginComponent = ({triggerButton}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const {login} = useAuth()

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);
      await login(email, password);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
    };
    
    return (
    <>
          
    <Dialog defaultOpen={!triggerButton}>
      { triggerButton &&
             <DialogTrigger asChild>
               <Button variant="ghost" >Login</Button>
             </DialogTrigger>
           }
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Login to CozyStay</DialogTitle>
        </DialogHeader>
        <form method="post" onSubmit={handleLogin}>
          <div className="grid w-full items-center gap-1.5 mt-4">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              required
              placeholder="one@one.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="grid w-full items-center gap-1.5 mt-4">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              required
              placeholder="*****"
              minLength="6"
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
              Login
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
                </Dialog >
        </>
  );
};

export default LoginComponent