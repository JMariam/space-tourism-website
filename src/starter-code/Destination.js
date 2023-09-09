import Header from "../starter-code/Header";
import  {DestinationsData} from './destData'
import { useState } from "react";

const Destination = () => {
  const [planets, setPlanets] = useState(DestinationsData);
  const [value, setValue] = useState(0)


  const {name, images, description, distance, travel} = planets[value]
    return ( 
        <div className="destination">
            <Header/>
            <div className="container mx-auto p-6 lg:px-32">
            <div className="text-gray-200"><span className="text-gray-500">01 </span> PICK YOUR DESTINATION</div>

<div className="grid place-items-center grid-cols-1 py-16 lg:grid-cols-2 gap-y-8 lg:gap-x-64 lg:gap-y-0">
  <img src={images.png} alt={name} title={name}/>

  <div className="md:pl-14 lg:pl-0">
    <div className="flex space-x-4 items-center">
     {planets.map((item, index) => (
    <button key={index} onClick={() => setValue(index)}  className={`text-xs uppercase text-gray-400 hover:border-b-2 border-slate-300 py-2 ${
      index === value && "border-b-2 border-slate-300"
    }`}>{item.name}</button>
))}
    </div>
    <div className="text-7xl text-white pt-4">{name}</div>
    <div className="text-gray-400 text-xs pt-8 pb-10 lg:pb-14 border-b border-gray-800 md:w-2/3 lg:w-full">{description}</div>
      <div className="flex space-x-16 pt-3">
        <div className="">
          <p className="text-xs text-gray-500 pb-2">AVG. DISTANCE</p>
          <p className="text-xl text-gray-200">{distance}</p>
        </div>
        <div className="">
          <p className="text-xs text-gray-500 pb-2">EST. TRAVEL TIME</p>
          <p className="text-xl text-gray-200">{travel}</p>
        </div>
      </div>
  </div>
  </div>
</div>
        </div>
     );
}
 
export default Destination;