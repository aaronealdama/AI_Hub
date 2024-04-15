"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog";
import React, { useState } from 'react';
import { Input } from "./ui/input";


const AuthModel = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
        <Input />
        </DialogContent>
    </Dialog>
  )
}

export default AuthModel;
