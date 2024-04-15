"use client"

import {createContext, useContext, useEffect, useState } from 'react'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "../../src/components/ui/input";

import type { SupabaseClient } from '@supabase/auth-helpers-nextjs'
import type { Database } from '@/lib/supabase.types'
import { Button } from '@/components/ui/button';

type SupabaseContext = {
    supabase: SupabaseClient<Database>
}

const Context = createContext<SupabaseContext | undefined>(undefined)

export default function SupabaseProvider({children}: { children: React.ReactNode}) {
    const [supabase] = useState(() => createBrowserSupabaseClient())
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false);

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

    return () => {
        subscription.unsubscribe()
    }
}, [router, supabase])

return (
    <Context.Provider value={{ supabase }}>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="bg-black p-6">
            <h3 className='text-lg my-1 text-white'>Please sign in to continue</h3>
            <form action="">
                <Input type='text' placeholder='email' />
                <p className='text-sm text-gray-900 my-2 text-white'>Login magic link</p>
                <div className='flex w-full justify-end'>
                <Button>Login</Button>
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