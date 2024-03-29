

export default function Nav() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-[5rem] py-[3rem]">
        <div className="logo">
            <a href="#" className="text-white font-bold text-4xl">SunnySide</a>
        </div>
        <ul className="menu flex flex-col md:flex-row text-white items-center  text-xl">
            <li className="mx-[2rem] my-[0.7rem]"><a href="#">About</a></li>
            <li className='mx-[2rem] my-[0.7rem]'><a href="#">Service</a></li>
            <li className='mx-[2rem] my-[0.7rem]'><a href="#">Projects</a></li>
            <li className="mx-[2rem] my-[0.7rem] flex justify-center items-center bg-white hover:bg-[#6FCFFF] text-black hover:text-white w-[140px] h-[55px] rounded-full cursor-pointer"><a href="#" className="font-Fraunces">CONTACT</a></li>
        </ul>
    </div>
  )
}
