import Header from "../starter-code/Header";
import  {TechnologyData} from './techData'
import { useState } from "react";

const Technology = () => {
  const [tech, setTech] = useState(TechnologyData);
  const [value, setValue] = useState(0)


  const {name, images, description} = tech[value]
    return ( 
        <div className="technology">
            <Header/>

    <div className="flex flex-col gap-y-8 items-center absolute top-[38%] left-[2%] md:top-[50%] lg:top-[65%]">
     {tech.map((item, index) => (
    <button key={index} onClick={() => setValue(index)}  className={`text-sm text-gray-600 px-[1.1rem] py-[0.7rem] border rounded-full ${
      index === value && "bg-white"
    }`}>{item.num}</button>
))}
 </div>

    <div className="container mx-auto p-6 lg:px-32">
      <div className="text-gray-200"><span className="text-gray-500">03 </span> SPACE LAUNCH 101</div>

  <div className="flex flex-col items-center py-6 lg:flex-row-reverse gap-y-8 lg:gap-x-8 lg:gap-y-0">
    <img src={images.png} alt={name} title={name}/>
    <div className="">
      <div className="text-6xl md:text-7xl text-white pt-4">{name}</div>
      <div className="text-gray-400 text-xs pt-8 pb-10 lg:pb-14 md:w-2/3 lg:w-full">{description}</div>
      </div>
  </div>
</div>
        </div>
     );
}
 
export default Technology;