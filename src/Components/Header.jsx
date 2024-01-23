import Nav from "./Nav";
import imgArrow from "../assets/img/icon-arrow-down.svg"

export default function Header() {
  return (
    <header className='h-[100vh] w-full bg-[url("/src/assets/img/mobile/image-header.jpg")] md:bg-[url("/src/assets/img/desktop/image-header.jpg")] bg-cover bg-center text-center' >
    <Nav/>
    <h1 className='text-7xl uppercase text-white mt-[4rem] tracking-widest font-[900]'>We are Creatives</h1>
    <div className='flex justify-center mt-[1rem]'>
        <img src={imgArrow} alt="icon-arrow-down" className='pt-[20px] w-fit h-[10rem] '  />
    </div>
    
</header>
  )
}
 