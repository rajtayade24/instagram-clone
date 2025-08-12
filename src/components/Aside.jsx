import userImage from '../images/user-profile.jpg'

function Aside() {
  return (
    <>
      <aside className="aside h-12/12 w-[400px] pl-[60px] pt-[30px] text-[14px] hidden min-[1150px]:block">
        <div className="profile-sec">
          <div className="main-profile flex justify-between items-center my-5 mx-3">
            <div className='flex gap-2'>
              <span><img className="h-[45px] w-[45px] rounded-full" alt="user profile" src={userImage} /></span>
              <div className="flex flex-col">
                <div className="username">rajtayade18</div>
                <div className="name text-gray-500">Raj Tayade</div>
              </div>
            </div>
            <a className='' href="#">switch</a>
          </div>
          <div className="suggest-profiles">
            <nav className='flex justify-between my-2 mx-3'>
              <h3>Suggest for you</h3>
              <span>See All</span>
            </nav>
            <div className="profiles flex justify-between items-center my-2 mx-3">
              <div className='flex gap-2'>
                <span><img className="h-[45px] w-[45px] rounded-full" alt="user profile" src={userImage} /></span>
                <div className="flex flex-col">
                  <div className="username">rajtayade18</div>
                  <div className="name text-gray-500">Raj Tayade</div>
                </div>
              </div>
              <button className=''>follow</button>
            </div>
            <div className="profiles flex justify-between items-center my-2 mx-3">
              <div className='flex gap-2'>
                <span><img className="h-[45px] w-[45px] rounded-full" alt="user profile" src={userImage} /></span>
                <div className="flex flex-col">
                  <div className="username">rajtayade18</div>
                  <div className="name text-gray-500">Raj Tayade</div>
                </div>
              </div>
              <button className=''>follow</button>
            </div>
            <div className="profiles flex justify-between items-center my-2 mx-3">
              <div className='flex gap-2'>
                <span><img className="h-[45px] w-[45px] rounded-full" alt="user profile" src={userImage} /></span>
                <div className="flex flex-col">
                  <div className="username">rajtayade18</div>
                  <div className="name text-gray-500">Raj Tayade</div>
                </div>
              </div>
              <button className=''>follow</button>
            </div>
            <div className="profiles flex justify-between items-center my-2 mx-3">
              <div className='flex gap-2'>
                <span><img className="h-[45px] w-[45px] rounded-full" alt="user profile" src={userImage} /></span>
                <div className="flex flex-col">
                  <div className="username">rajtayade18</div>
                  <div className="name text-gray-500">Raj Tayade</div>
                </div>
              </div>
              <button className=''>follow</button>
            </div>
            <div className="profiles flex justify-between items-center my-2 mx-3">
              <div className='flex gap-2'>
                <span><img className="h-[45px] w-[45px] rounded-full" alt="user profile" src={userImage} /></span>
                <div className="flex flex-col">
                  <div className="username">rajtayade18</div>
                  <div className="name text-gray-500">Raj Tayade</div>
                </div>
              </div>
              <button className=''>follow</button>
            </div>
            <footer className='footer opacity-50 flex flex-wrap gap-3 leading-2'>
              <a className='text-[12px] text-gray-500'>About</a>
              <a className='text-[12px] text-gray-500'>Help</a>
              <a className='text-[12px] text-gray-500'>Press</a>
              <a className='text-[12px] text-gray-500'>API</a>
              <a className='text-[12px] text-gray-500'>Jobs</a>
              <a className='text-[12px] text-gray-500'>Privacy</a>
              <a className='text-[12px] text-gray-500'>Terms</a>
              <a className='text-[12px] text-gray-500'>Locations</a>
              <a className='text-[12px] text-gray-500'>Language</a>
              <a className='text-[12px] text-gray-500'>Meta Verified</a>
              <p className='mt-4'>© 2025 Instagram from Meta</p>
            </footer>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Aside