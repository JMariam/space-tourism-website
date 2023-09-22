import logo from '../starter-code/assets/shared/logo.svg';
import hamburger from '../starter-code/assets/shared/icon-hamburger.svg';
import close from '../starter-code/assets/shared/icon-close.svg';
import { useState } from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
   const [icon, setIcon] = useState(false)

    const openMenu = () =>{
       const menu = document.querySelector('.menu')
       const listItems = document.querySelectorAll('.listitem')

       menu.classList.toggle('open')
       setIcon(!icon)

       listItems.forEach((listItem) => listItem.addEventListener('click', () => menu.classList.remove('open'))
       )
    }

   
    return ( 
        <header className="relative">
            <div className="container mx-auto p-6">
                <div className="flex justify-between align-center py-10">
                    <div className="">
                        <img src={logo} alt="" />
                    </div>
                    <div className="nav-items hidden text-slate-300 text-sm space-x-8 items-center pl-10 pr-24  lg:pr-56 lg:pl-20 lg:flex">
                        
                        <Link to='/space-tourism-website'className="text-xs text-gray-300 hover:border-b hover:border-gray-100 py-4">HOME</Link>
                        <Link to='/space-tourism-website/destination' className="text-xs text-gray-300 hover:border-b hover:border-gray-100 py-4">DESTINATION</Link>
                        <Link to='/space-tourism-website/crew' className="text-xs text-gray-300 hover:border-b hover:border-gray-100 py-4">CREW</Link>
                        <Link to='/space-tourism-website/technology' className="text-xs text-gray-300 hover:border-b hover:border-gray-100 py-4">TECHNOLOGY</Link>
                    </div>
                    <div className="lg:hidden cursor-pointer" onClick={openMenu}>
                         {
                        icon ?
                         (
                            <img src={close} alt=""  />
                        ) 
                        :
                        (
                            <img src={hamburger} alt=""  />
                        ) 
                    }
                    </div>
                        <div className="menu absolute left-[-100%]  z-50 flex flex-col p-10 bg-white w-80 pt-20 rounded-md top-40 lg:hidden">
                        <Link to='/space-tourism-website'className="listitem hover:border-b border-slate-300 py-4 font-bold">00 Home</Link>
                        <Link to='/space-tourism-website/destination' className="listitem hover:border-b border-slate-300 py-4 font-bold">01 Destination</Link>
                        <Link to='/space-tourism-website/crew' className="listitem hover:border-b border-slate-300 py-4 font-bold">02 Crew</Link>
                        <Link to='/space-tourism-website/technology' className="listitem hover:border-b border-slate-300 py-4 font-bold">03 Technology</Link>
                        </div>
                </div>
            </div>


        </header>
     );
}
 
export default Header;
