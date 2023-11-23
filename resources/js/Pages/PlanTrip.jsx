import Header from "../components/header";
import Footer from "../components/footer";
import {data} from "./data";
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'

export default function Plantrip(){

    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
    };

    const slideRight = () =>{
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    };
    return <div>
        <Header/>
        <div >
        <div className="text-center font-bold text-2xl h-[50px]">Where do you want to go?</div>
        <form className=" mx-auto w-[900px] relative items-center justify-center">
            <div className="h-[120px]" >
                <div className="absolute ml-[20px] mt-[20px]">
                    <img src="/images/search.png"/>
                </div>
            
            <input type="search "  placeholder=" City, landmark"  className=" w-full p-4 rounded-full bg-white text-center border-2 "  />
            </div>
        </form>
        <div className="mr-[600px] h-[60px]">
        <div className=" font-bold text-2xl " >Popular destinations go ?</div>
        </div>
        <div className=" flex justify-center items-center rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow">
                    <div className=" h-96 w-72 "> 
                        <img className="h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500 rounded-3xl "src="/images/ub.png" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-slate-500 group-hover:via-slate/60 group-hover:to-slate/70"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all duration-500">
                        <h1 className="text-3x1 font-bold text-white">Ulaanbaatar</h1>
                        <p className="text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur impedit soluta atque.</p>
                    </div>
                </div>
                <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow">
                    <div className=" h-96 w-72 "> 
                        <img className="h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500 rounded-3xl"src="/images/ER.png" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-slate-500 group-hover:via-slate/60 group-hover:to-slate/70"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all duration-500">
                        <h1 className="text-3x1 font-bold text-white">Erdenet</h1>
                        <p className="text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur impedit soluta atque.</p>
                    </div>
                </div>
                <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow">
                    <div className=" h-96 w-72 "> 
                        <img className="h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500 rounded-3xl "src="/images/Kh.png" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-slate-500 group-hover:via-slate/60 group-hover:to-slate/70"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all duration-500">
                        <h1 className="text-3x1 font-bold text-white">Khuwsgul</h1>
                        <p className="text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur impedit soluta atque.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <Header/>
        <div>
        <div className="text-center font-bold text-2xl h-[60px]">When do you want to go?</div>
        <form className="mx-auto w-[900px] h-[120px] ">
            <div  className=" text-2xl font-bold  mr-[700px]">How many days?</div>
            <input type="tel" id="phone" class="w-full p-4  bg-white  border" placeholder="number of days" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required></input>
        </form>
        <div className="  text-center font-bold text-2xl mr-[620px] ">Which month? (optional)</div>
        </div>
        <div className="relative flex items-center">
            <MdChevronLeft className="opacity-50 cursor-pointer hover:opacity-100" onClick={slideLeft} size={40}/>
            <div id='slider' className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide">
            {data.map((item) => (
                <img className="w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" src={item.img} alt="" />
            ))}
            </div>
            <MdChevronRight className="opacity-50 cursor-pointer hover:opacity-100" onClick={slideRight} size={40}/>
        </div>
        <Header/>
        <div>
            <div className="font-bold text-2xl  h-10">What activity do you prefer? </div>
            <span className=" h-20 ">(choose 5 or more)</span>
        </div>
        <div className="flex flex-wrap justify-center gap-12">
        <div className=" mx-auto w-28 h-10 object-cover">
        <label className="relative cursor-pointer">
            <input type="checkbox" className="peer sr-only"/>
            <div className="overflow-hidden rounded-lg bg-amber-600 shadow-md ring ring-transparent peer-checked:ring-yellow-400 grayscale peer-checked:grayscale-0 active:scale-95 transition-all">
                <p className="text-cyan-50">text</p>
            </div>
        </label>
        </div>
        <div className=" mx-auto w-28 h-10 object-cover">
        <label className="relative cursor-pointer">
            <input type="checkbox" className="peer sr-only"/>
            <div className="overflow-hidden rounded-lg bg-amber-600 shadow-md ring ring-transparent peer-checked:ring-yellow-400 grayscale peer-checked:grayscale-0 active:scale-95 transition-all">
                <p className="text-cyan-50">text</p>
            </div>
        </label>
        </div>
        <div className=" mx-auto w-28 h-10 object-cover">
        <label className="relative cursor-pointer">
            <input type="checkbox" className="peer sr-only"/>
            <div className="overflow-hidden rounded-lg bg-amber-600 shadow-md ring ring-transparent peer-checked:ring-yellow-400 grayscale peer-checked:grayscale-0 active:scale-95 transition-all">
                <p className="text-cyan-50">text</p>
            </div>
        </label>
        </div>
        <div className=" mx-auto w-28 h-10 object-cover">
        <label className="relative cursor-pointer">
            <input type="checkbox" className="peer sr-only"/>
            <div className="overflow-hidden rounded-lg bg-amber-600 shadow-md ring ring-transparent peer-checked:ring-yellow-400 grayscale peer-checked:grayscale-0 active:scale-95 transition-all">
                <p className="text-cyan-50">text</p>
            </div>
        </label>
        </div>
        <div className=" mx-auto w-28 h-10 object-cover">
        <label className="relative cursor-pointer">
            <input type="checkbox" className="peer sr-only"/>
            <div className="overflow-hidden rounded-lg bg-amber-600 shadow-md ring ring-transparent peer-checked:ring-yellow-400 grayscale peer-checked:grayscale-0 active:scale-95 transition-all">
                <p className="text-cyan-50">text</p>
            </div>
        </label>
        </div>
        <div className=" mx-auto w-28 h-10 object-cover">
        <label className="relative cursor-pointer">
            <input type="checkbox" className="peer sr-only"/>
            <div className="overflow-hidden rounded-lg bg-amber-600 shadow-md ring ring-transparent peer-checked:ring-yellow-400 grayscale peer-checked:grayscale-0 active:scale-95 transition-all">
                <p className="text-cyan-50">text</p>
            </div>
        </label>
        </div>
        <div className=" mx-auto w-28 h-10 object-cover">
        <label className="relative cursor-pointer">
            <input type="checkbox" className="peer sr-only"/>
            <div className="overflow-hidden rounded-lg bg-amber-600 shadow-md ring ring-transparent peer-checked:ring-yellow-400 grayscale peer-checked:grayscale-0 active:scale-95 transition-all">
                <p className="text-cyan-50">text</p>
            </div>
        </label>
        </div>
        <div className=" mx-auto w-28 h-10 object-cover">
        <label className="relative cursor-pointer">
            <input type="checkbox" className="peer sr-only"/>
            <div className="overflow-hidden rounded-lg bg-amber-600 shadow-md ring ring-transparent peer-checked:ring-yellow-400 grayscale peer-checked:grayscale-0 active:scale-95 transition-all">
                <p className="text-cyan-50">text</p>
            </div>
        </label>
        </div>
        <div className=" mx-auto w-28 h-10 object-cover">
        <label className="relative cursor-pointer">
            <input type="checkbox" className="peer sr-only"/>
            <div className="overflow-hidden rounded-lg bg-amber-600 shadow-md ring ring-transparent peer-checked:ring-yellow-400 grayscale peer-checked:grayscale-0 active:scale-95 transition-all">
                <p className="text-cyan-50">text</p>
            </div>
        </label>
        </div>
        <div className=" mx-auto w-28 h-10 object-cover">
        <label className="relative cursor-pointer">
            <input type="checkbox" className="peer sr-only"/>
            <div className="overflow-hidden rounded-lg bg-amber-600 shadow-md ring ring-transparent peer-checked:ring-yellow-400 grayscale peer-checked:grayscale-0 active:scale-95 transition-all">
                <p className="text-cyan-50">text</p>
            </div>
        </label>
        </div>
        <div className=" mx-auto w-28 h-10 object-cover">
        <label className="relative cursor-pointer">
            <input type="checkbox" className="peer sr-only"/>
            <div className="overflow-hidden rounded-lg bg-amber-600 shadow-md ring ring-transparent peer-checked:ring-yellow-400 grayscale peer-checked:grayscale-0 active:scale-95 transition-all">
                <p className="text-cyan-50">text</p>
            </div>
        </label>
        </div>
        <div className=" mx-auto w-28 h-10 object-cover">
        <label className="relative cursor-pointer">
            <input type="checkbox" className="peer sr-only"/>
            <div className="overflow-hidden rounded-lg bg-amber-600 shadow-md ring ring-transparent peer-checked:ring-yellow-400 grayscale peer-checked:grayscale-0 active:scale-95 transition-all">
                <p className="text-cyan-50">text</p>
            </div>
        </label>
        </div>
        <div className=" mx-auto w-28 h-10 object-cover">
        <label className="relative cursor-pointer">
            <input type="checkbox" className="peer sr-only"/>
            <div className="overflow-hidden rounded-lg bg-amber-600 shadow-md ring ring-transparent peer-checked:ring-yellow-400 grayscale peer-checked:grayscale-0 active:scale-95 transition-all">
                <p className="text-cyan-50">text</p>
            </div>
        </label>
        </div>
        <div className=" mx-auto w-28 h-10 object-cover">
        <label className="relative cursor-pointer">
            <input type="checkbox" className="peer sr-only"/>
            <div className="overflow-hidden rounded-lg bg-amber-600 shadow-md ring ring-transparent peer-checked:ring-yellow-400 grayscale peer-checked:grayscale-0 active:scale-95 transition-all">
                <p className="text-cyan-50">text</p>
            </div>
        </label>
        </div>
        <div className=" mx-auto w-28 h-10 object-cover">
        <label className="relative cursor-pointer">
            <input type="checkbox" className="peer sr-only"/>
            <div className="overflow-hidden rounded-lg bg-amber-600 shadow-md ring ring-transparent peer-checked:ring-yellow-400 grayscale peer-checked:grayscale-0 active:scale-95 transition-all">
                <p className="text-cyan-50">text</p>
            </div>
        </label>
        </div>
        <div className=" mx-auto w-28 h-10 object-cover">
        <label className="relative cursor-pointer">
            <input type="checkbox" className="peer sr-only"/>
            <div className="overflow-hidden rounded-lg bg-amber-600 shadow-md ring ring-transparent peer-checked:ring-yellow-400 grayscale peer-checked:grayscale-0 active:scale-95 transition-all">
                <p className="text-cyan-50">text</p>
            </div>
        </label>
        </div>
        <div className=" mx-auto w-28 h-10 object-cover">
        <label className="relative cursor-pointer">
            <input type="checkbox" className="peer sr-only"/>
            <div className="overflow-hidden rounded-lg bg-amber-600 shadow-md ring ring-transparent peer-checked:ring-yellow-400 grayscale peer-checked:grayscale-0 active:scale-95 transition-all">
                <p className="text-cyan-50">text</p>
            </div>
        </label>
        </div>
        <div className=" mx-auto w-28 h-10 object-cover">
        <label className="relative cursor-pointer">
            <input type="checkbox" className="peer sr-only"/>
            <div className="overflow-hidden rounded-lg bg-amber-600 shadow-md ring ring-transparent peer-checked:ring-yellow-400 grayscale peer-checked:grayscale-0 active:scale-95 transition-all">
                <p className="text-cyan-50">text</p>
            </div>
        </label>
        </div>
        </div>
        <form>   
            <div class="relative h-20">
                <input type="text" id="text" class=" w-[450px] p-4 pl-10 " placeholder="submit" required/>
                <button type="submit" class="text-white bottom-2.5 bg-amber-600 hover:bg-amber-500 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 ">Submit</button>
            </div>
        </form>
        
        
        
        <Footer/>
    </div>
} 