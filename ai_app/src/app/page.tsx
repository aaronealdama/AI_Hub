import LeftSidebar from "@/components/LeftSidebar"
import MainComponent from "@/components/MainComponent";
import RightSection from "@/components/RightSection";

import { Database } from "@/lib/supabase.types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { headers, cookies } from "next/headers";



const Home = async () => {
  return (
    <div className="w-full h-full flex justify center items-center text-white relative bg-black">
      <div className="xl:max-w-[70vw] w-full h-full flex relative">
          <LeftSidebar/>
          <MainComponent/>
          <RightSection/>
      </div>
    </div>
  )
}

export default Home;
