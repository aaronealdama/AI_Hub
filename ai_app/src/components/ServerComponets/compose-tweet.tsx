import { cookies } from "next/headers";
import React from 'react';
import { SupabaseClient, createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { randomUUID } from "crypto";
import FormClientComponent from "./FormClientComponent";


const ComposeTweet = () => {
  
async function submitTweet(formData: FormData) {
    "use server";
    
    const tweet = formData.get("tweet");
    
    if (!tweet) return;

    const supabaseClient = createServerComponentClient({
        cookies,
    });
    

    const supabaseUrl  = process.env.NEXT_PUBLIC_SUPABASE_URL as string
    const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY as string

    if(!supabaseUrl || !supabaseSecretKey) 
        return {error:{message: "supabase credentials not provided!"}};

    const supabaseServer = new SupabaseClient(supabaseUrl, supabaseSecretKey)

    const {data: userData, error: userError} = await supabaseClient.auth.getUser();

    if(userError) return;

    const {data, error} = await supabaseServer.from("tweets").insert({
        profile_id: userData.user.id,
        text: tweet.toString(),
        id: randomUUID(),
    });
    return {data, error};
  }
  return (
       <FormClientComponent 
       serverAction={submitTweet}
       />
  )
}

export default ComposeTweet;
