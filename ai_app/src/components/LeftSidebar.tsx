import {BiHomeCircle} from 'react-icons/bi';
import {FaHashtag} from "react-icons/fa";
import {FaBell} from "react-icons/fa";
import {FaRegEnvelope} from "react-icons/fa";
import {CiBookmark} from "react-icons/ci";
import {CiUser} from "react-icons/ci";
import {FaRobot} from "react-icons/fa";
import {BsThreeDots} from "react-icons/bs";
import Link from "next/link";


const NAVIATION_ITEMS = [
  {
    title:'AI_Hub',
    icon:FaRobot
  },
  {
    title:'Home',
    icon:BiHomeCircle
  },
  {
    title:'Explore',
    icon:FaHashtag
  },
  {
    title:'Notifications',
    icon:FaBell
  },
  {
    title:'Messages',
    icon:FaRegEnvelope
  },
  {
    title:'Bookmarks',
    icon:CiBookmark
  },
  {
    title:'Profile',
    icon:CiUser
  }
]

const LeftSidebar = () => {
    return (
            <section className="sticky top-0 w-[23%] xl:flex flex-col items-stretch h-screen hidden">
              <div className='flex flex-col items-stretch h-full space-y-4 mt-4'>
                {NAVIATION_ITEMS.map((item) => (
                    <Link 
                    className="hover:bg-white/10 text-2xl transition duration-200 flex items-center justify-start w-fit 
                    space-x-4 rounded-3xl py-2 px-6"
                    href={`/${item.title.toLowerCase()}`}  
                    key={item.title}
                    >
                        <div>
                          <item.icon />
                        </div>
                        {item.title !== "AI_Hub" && <div>{item.title}</div>}
                    </Link>
                  ))}
                  <button className='rounded-full bg-AI_hub_color px-6 py-4 text-center hover:bg-opacity-70 transition
                  duation-200'>
                    Upload
                  </button>
              </div>
              <div>
              <button className='rounded-full flex items-center space-x-2 m-4 bg-transparent p-4 text-center hover:bg-white/10 transition duation-200'>
                  <div className=' flex items-center space-x-2'>
                    <div className='rounded-full bg-slate-400 w-12 h-'></div>
                    <div className="text-left text-xs">
                        <div className='font-semibold'>Aaron Ealdama</div>
                        <div className='text-xs'>@Aaron_Ealdama</div>
                    </div>
                    <div>
                      <BsThreeDots/>
                    </div>
                  </div>
                  
              </button>
              </div>
         </section>
          
    )
}


export default LeftSidebar