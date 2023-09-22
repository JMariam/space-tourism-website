import Header from "../Components/Header";



const Home = () => {
    return ( 
        <section className="home relative">
          <Header/>
            <div className="container mx-auto pb-6 px-6 md:py-12 lg:py-20 lg:px-32 grid md:grid-cols-2 gap-y-12">
         <div className="">
         <p className="text-slate-300 text-sm">SO, YOU WANT TO TRAVEL TO</p>
          <h1 className="text-white text-8xl pt-2 pb-8">SPACE</h1>
          <p  className="text-slate-300 text-sm">Let’s face it; if you want to go to space, you might as well genuinely go to 
            outer space and not hover  kind of on the edge of it. Well sit back, and relax 
            because we’ll give you a truly out of this world  experience!</p>
         </div>
        <div className="bg-white place-self-end text-md text-gray-700 h-[10rem] w-[10rem] te rounded-full grid place-content-center">
          EXPLORE
        </div>
            </div>
        </section>
     );
}
 
export default Home;