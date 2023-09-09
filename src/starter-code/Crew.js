import Header from "../starter-code/Header";
import  {CrewData} from './crewData'
import { useState } from "react";
import {BsCircle} from "react-icons/bs";

const Crew = () => {
  const [people, setPeople] = useState(CrewData);
  const [value, setValue] = useState(0)


  const {name, images, role, bio} = people[value]
    return ( 
        <div className="crew">
            <Header/>
            <div className="container mx-auto p-6 lg:px-32">
            <div className="text-gray-200"><span className="text-gray-500">02 </span> MEET YOUR CREW</div>

<div className="flex flex-col items-center lg:flex-row-reverse py-4 gap-y-8 lg:gap-y-0 lg:gap-x-6">
  <img src={images.png} alt={name} title={name} className="w-[30rem]"/>

  <div className="md:pl-14 lg:pl-0 w-full">
    <div className="text-xl uppercase text-gray-400 border-slate-300">{role}</div>
    <div className="text-6xl text-white pt-2">{name}</div>
    <div className="text-gray-400 text-xs pt-12 pb-10 lg:pb-14 md:w-2/3 lg:w-full">{bio}</div>
     
     <div className="flex space-x-8 items-center pt-4">
     {people.map((item, index) => (
    <button key={index} onClick={() => setValue(index)}  className={`text-xs h-3 w-3 rounded-full ${
      index === value && 'bg-white'
    }`}>
    <BsCircle className=" text-slate-600 h-3 w-3"/>
    </button>
))}
    </div>
  </div>
  </div>
</div>
        </div>
     );
}
 
export default Crew;