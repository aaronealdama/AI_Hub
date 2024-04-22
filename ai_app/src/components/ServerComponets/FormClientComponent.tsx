"use client"

import React from 'react'
import {toast} from 'sonner';

type FormClientComponentProps =  {
        serverAction: (
        formData: FormData
        ) => Promise< { data: null; error: null } |undefined>;
};

const FormClientComponent = ({serverAction}: FormClientComponentProps) => {
  const handleSubmitTweet = async (data: any) => {
        try {
        const res = await serverAction(data);
        if (res?.error) {
            return toast.error(res.error.message);
            }
        toast.success("Tweet sent successfully");
        } catch (error) {
        console.log(error);
        }
    }
  return (
    <form action={handleSubmitTweet as any} 
        className="flex flex-col w-full h-full">
        <input 
        className="w-full h-full placeholder:text-2xl placeholder-gray-600 bg-transparent border-b-[0.5px] border-gray-600 p-4 outline-none border-none"
        type="text" 
        placeholder="What's happening?"
        />
        <div className="w-full justify-between items-center flex">
        <div></div>
        <div className="w-full max-w[100px]">
        <button className='rounded-full bg-AI_hub_color px-4 py-2  text-lg text-center hover:bg-opacity-70 transition
            duation-200 font-bold'>
            Upload
            </button>
        </div>
        </div>
    </form>
  )
}

export default FormClientComponent
