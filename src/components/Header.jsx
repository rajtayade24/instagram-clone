import { useState, useEffect } from 'react';
import ig_icon from "../svgs/ig-icon.svg";
import heartIcon from '../svgs/ig-heart.svg';

function Header() {
  // usestate is use to rerender the value 
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {width > 600 ? (
        < header className="header fixed top-0 left-0 h-full border-r-2 border-r-gray-300 px-2 gap-3 overflow-y-visible ">
          
          <div className="logo flex items-center my-8 mx-1 cursor-pointer">
            <div className="ig-icon w-10 h-10 bg-gray-200 flex justify-center items-center m-3 rounded-xl xl:hidden"><img src={ig_icon} alt="" /></div>
            <div className="font-[Pacifico] text-[28px] ig-logo py-3 px-5 font-bold hidden xl:block active:text-gray-500">Instagram</div>
          </div>

          <nav>
            <div className="nav-link active px-5 py-3 flex gap-3 items-center hover:bg-gray-100 rounded-xl cursor-pointer xl:w-[230px] active:scale-95">
              <span className='flex justify-center items-center relative'>
              <div> <i className="bi bi-house-door text-2xl"></i></div>
              </span>
              <span className="hidden xl:block">Home</span>
            </div>

            <div className="nav-link px-5 py-3 flex gap-3 items-center hover:bg-gray-100 rounded-xl cursor-pointer xl:w-[230px] active:scale-95">
              <span className='flex justify-center items-center relative'>
              <i className="bi bi-search text-3xl"></i>
              </span>
              <span className="hidden xl:block">Search</span>
            </div>

            <div className="nav-link px-5 py-3 flex gap-3 items-center hover:bg-gray-100 rounded-xl cursor-pointer xl:w-[230px] active:scale-95">
              <span className='flex justify-center items-center relative'>
              <i className="bi bi-compass text-3xl"></i>
              </span>
              <span className="hidden xl:block">Explore</span>
            </div>

            <div className="nav-link px-5 py-3 flex gap-3 items-center hover:bg-gray-100 rounded-xl cursor-pointer xl:w-[230px] active:scale-95">
              <span className='flex justify-center items-center relative'>
              <i className="bi bi-camera-reels text-3xl"></i>
              </span>
              <span className="hidden xl:block">Reels</span>
            </div>

            <div className="nav-link px-5 py-3 flex gap-3 items-center hover:bg-gray-100 rounded-xl cursor-pointer xl:w-[230px] active:scale-95">
              <span className='flex justify-center items-center relative'>
                <span className='w-5 h-5 text-[12px] flex justify-center items-center bg-red-600 absolute top-[-4px] right-[-4px] p-0.5 rounded-[50%]'>1</span>
              <i className="bi bi-chat-left text-3xl"></i>
              </span>
              <span className="hidden xl:block">Messages</span>
            </div>

            <div className="nav-link px-5 py-3 flex gap-3 items-center hover:bg-gray-100 rounded-xl cursor-pointer xl:w-[230px] active:scale-95">
              <span className='flex justify-center items-center relative'>
              <i className="bi bi-heart text-3xl"></i>
              </span>
              <span className="hidden xl:block">Notifications</span>
            </div>

            <div className="nav-link px-5 py-3 flex gap-3 items-center hover:bg-gray-100 rounded-xl cursor-pointer xl:w-[230px] active:scale-95">
              <span className='flex justify-center items-center relative'>
              <i className="bi bi-plus-square text-3xl"></i>
              </span>
              <span className="hidden xl:block">Create</span>
            </div>

            <div className="nav-link px-5 py-3 flex gap-3 items-center hover:bg-gray-100 rounded-xl cursor-pointer xl:w-[230px] active:scale-95">
              <span className='flex justify-center items-center relative'>
              <i className="bi bi-person-circle text-3xl"></i>
              </span>
              <span className="hidden xl:block">Profile</span>
            </div>

            <div className="nav-link px-5 py-3 flex gap-3 items-center hover:bg-gray-100 rounded-xl cursor-pointer xl:w-[230px] active:scale-95">
              <span className='flex justify-center items-center relative'>
              <i className="bi bi-list text-3xl"></i>
              </span>
              <span className="hidden xl:block">More</span>
            </div>
          </nav>

        </header >) :
        (
          <>

            <header className="flex justify-between items-center w-full fixed top-0 bg-white border-b border-gray-300 px-4 py-2 z-50">
              <div className="font-bold text-xl cursor-pointer w-[120px]"> Instagram</div>

              <div className="flex items-center bg-gray-100 rounded-lg px-3 py-1 w-[250px] md:w-[300px]">
                <i className="fa-solid fa-magnifying-glass text-gray-500 mr-2"></i>
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent outline-none text-sm w-full placeholder-gray-500"
                />
              </div>

              <div className="ml-4 cursor-pointer">
                <img src={heartIcon} alt="Notifications" className="w-6 h-6" />
              </div>
            </header>

            <div className="flex justify-around fixed z-10 bottom-0 w-full bg-white border-t border-gray-300 shadow-md py-2">
              <span className='flex justify-center items-center relative'>
              <div> <i className="bi bi-house-door text-2xl"></i></div>
              </span>
              <span className='flex justify-center items-center relative'>
              <div> <i className="bi bi-search text-2xl"></i></div>
              </span>
              <span className='flex justify-center items-center relative'>
              <div> <i className="bi bi-plus-square text-2xl"></i></div>
              </span>
              <span className='flex justify-center items-center relative'>
              <div> <i className="bi bi-compass text-2xl"></i></div>
              </span>
              <span className='flex justify-center items-center relative'>
              <div> <i className="bi bi-person-circle text-2xl"></i></div>
              </span>
            </div>

          </>
        )
      }
    </>
  )
}
export default Header