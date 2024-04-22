import { BsChat, BsDot, BsThreeDots } from "react-icons/bs";
import { FaHeart, FaRetweet } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
import { CiShare1 } from "react-icons/ci";
import ComposeTweet from "./ServerComponets/compose-tweet";

const getTweets = async () => {
  
}

const MainComponent = () => {
  return (   
      <main className="flex w-full xl:w-[50%] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600">
          <h1 className="text-xl font-bold p-6 backdrop-blur bg-black/10 sticky top-0">Home</h1>
          <div className="border-t-[0.5px] px-4 border-b-[0.5px] flex items-stretch py-6 space-x-2 border-gray-600 relative">
            <div className="w-11 h-11 bg-slate-400 rounded-full flex-none"></div>
            {<ComposeTweet/>}
          </div>
          <div className="flex flex-col w-full">
        {
          Array.from({length:5}).map((_,i)=>(
            <div key={i} className="border-b-[0.5px] p-y4 px-6 flex space-x-4">
              <div>
                <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center w-full justify-between">
                  <div className="flex items-center space-x-1 w-full">
                    <div className="font-bold">Aaron Ealdama</div>
                    <div className="text-gray-500">@Aaron_Ealdama</div>
                    <div className="text-gray-500">
                      <BsDot/>
                    </div>
                    <div className="text-gray-500">1 hour ago</div>
                    
                  </div>
                  <div><BsThreeDots/></div>
                </div>
                <div className="text-white text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea officia repellendus ratione 
                </div>
                <div className="bg-slate-400 aspect-square w-full h-80 rounded-xl mt-2"></div>
                <div className="flex items-center justify-between space-x-20 mt-4 w-full">
                  <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer"><BsChat/></div>
                  <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer"><FaRetweet/></div>
                  <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer"><FaHeart/></div>
                  <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer"><IoStatsChart/></div>
                  <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer"><CiShare1/></div>
                </div>
              </div>
            </div>
          ))}
          </div>
        </main>
  )
}

export default MainComponent
