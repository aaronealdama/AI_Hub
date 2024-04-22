import { BsSearch } from "react-icons/bs";


const RightSection = () => {
  return (
    <section className="w-full sticky top-2 overflow-scroll mt-2 w-full xl:flex flex-col items-stretch h-screen px-6 hidden">
        <div>
            <div className=" relative w-full h-full group">
                <input 
                type="text" 
                placeholder="Search AI Hub" 
                className="outline-none peer focus:border-primary focus:border bg-neutral-900/90 w-full h-full rounded-xl 
                py-4 pl-14 pr-4"
                />
                <label 
                htmlFor="searchBox" 
                className="absolute top-0 left-0 h-full flex items-center justify-center p-4 peer-focus:text-primary">
                    <BsSearch className="w-5 h-5"/>
                </label>
                
            </div>
            </div>
            <div className="flex flex-col rounded-xl bg-neutral-900 my-4">
            <h3 className="font-bold text-xl my-4 px-4">What's happening</h3>
            <div>
                {
                Array.from({length:5}).map((_, i) => (
                    <div 
                    key={i} 
                    className="hover:bg-white/10 p-4 last:rounded-b-xl transition duration">
                    <div className="font-bold text-lg">#Trending ${i + 1}</div>
                    <div className="text-xs text-neutral-400">40.0k</div>
                    </div>
                ))
                }
            </div>
            </div>
            <div className="flex flex-col rounded-xl bg-neutral-900 my-4">
            <h3 className="font-bold text-xl my-4 px-4">Who to follow</h3>
            <div>
                {
                Array.from({length:5}).map((_, i) => (
                    <div 
                    key={i} 
                    className="hover:bg-white/10 flex items-center p-4 justify-between last:rounded-b-xl transition duration">
                    <div className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-neutral-600 rounded-full flex-none"></div>
                        <div className="flex flex-col">
                        <div className="font-bold text-white">Other User</div>
                        <div className="text-gray-500 text-xs">@otheruser1234</div>
                        </div>
                    </div>
                    <div className="w-full">
                        <button className="rounded-full px-6 py-2 bg-white text-neutral-950">
                        Follow
                        </button>
                    </div>
                    </div>
                ))
                }
            </div>
        </div>
    </section>
  )
}

export default RightSection
