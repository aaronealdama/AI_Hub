"use client"

import {createContext, useContext, useEffect, useState } from 'react'
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "../../src/components/ui/input";

import type { SupabaseClient } from '@supabase/auth-helpers-nextjs'
import type { Database } from '@/lib/supabase.types'
import { Button } from '@/components/ui/button';
import { Toaster, toast } from 'sonner';

type SupabaseContext = {
    supabase: SupabaseClient<Database>
}

const Context = createContext<SupabaseContext | undefined>(undefined)

export default function SupabaseProvider({children}: { children: React.ReactNode}) {
    const [supabase] = useState(() => createPagesBrowserClient())
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false);

    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const {
            data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
        router.refresh()
    })

    supabase.auth.getSession().then((res) => {
        console.log(res);
        if (!res.data.session) {
          setIsOpen(true);
          return;
        }
      });
    supabase.auth.getSession().then((res) => {
        console.log(res);
        if(!res.data.session) {
            setIsOpen(true);
        }
    });
    
    return () => {
        subscription.unsubscribe()
    }
}, [router, supabase])

return (
    <Context.Provider value={{ supabase }}>
        <Toaster />
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="bg-black p-6">
            <h3 className='text-lg my-1 text-white'>Please sign in to continue</h3>
            <form onSubmit={async (e)=> {
                e.preventDefault();

                setIsLoading(true);

                // first check if the username exists or not
                const {data, error} = await supabase.from('profiles').select().eq('username', username.trim());

                if(data && data?.length > 0){
                    console.log(data)
                    return toast.error('username already exists, please use another');
                }
                await supabase.auth.signInWithOtp({
                    email: email.trim(),
                    options:{
                        data:{
                            username
                        },
                    }, 
                });
                setIsLoading(false);
            }}>
                <Input type='email' placeholder='email' onChange={e=>setEmail(e.target.value)} />
                <Input type='text' placeholder='username' min={3} onChange={e=>setUsername(e.target.value)} />
                <p className='text-sm text-gray-900 my-2 text-white'>Login magic link</p>
                <div className='flex w-full justify-end'>
                <Button disabled={isLoading}>Login</Button>
                </div>
            </form>
            </DialogContent>
        </Dialog>
        <>{children}</>
    </Context.Provider>

    

    )
}

export const useSupabase = () => {
    const context = useContext(Context)

    if (context === undefined) {
        throw new Error('useSupabase must be used inside SupabaseProvider')
    }

    return context
}