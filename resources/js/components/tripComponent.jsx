import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineClockCircle } from "react-icons/ai";
import Review from "./review";
export default function TripComponent({
    title,
    image,
    location,
    duration,
    review,
    rating,
    price,
    discount,
}) {
    return (
        <div className=" h-[400px] w-[300px] border-2 border-neutral-100 rounded-2xl bg-white flex flex-col drop-shadow-[_0px_9px_34px_rgba(0,0,0,0.08)]">
            <div className=" relative h-[45%] rounded-2xl rounded-b-md">
                <img src={image} alt="" className=" h-[180px] w-full " />
                <div className=" absolute flex justify-center left-3 top-4 rounded-md bg-[#32B837] w-16 h-6 drop-shadow-[_0px_0px_5px_rgba(0,0,0,0.25)] text-white text-xs items-center">
                    {discount}% off
                </div>
                <div className=" absolute flex justify-center right-3 top-2 w-7 items-center">
                    <img
                        src="/images/favorite.png"
                        alt=""
                        className=" hover:opacity-50"
                    />
                </div>
            </div>
            <div className=" mx-4 my-2 h-12 flex justify-center text-lg leading-5 items-center font-bold">
                <p>{title}</p>
            </div>
            <div className=" h-8 mb-2 mx-4 flex flex-row items-center ">
                <span className=" text-black50 text-xl mr-2">
                    <FaLocationDot />
                </span>
                <div className=" leading-4 text-black75 font-medium text-sm">
                    {location}
                </div>
            </div>

            <div className=" flex flex-row justify-center items-center">
                <span className=" mr-2 text-xl font-bold text-orange">
                    <AiOutlineClockCircle />
                </span>
                <div className=" text-sm font-semibold">{duration}</div>
            </div>
            <div className=" flex flex-row justify-between mx-4 mt-2">
                <div>
                    <Review />
                </div>
                <div className=" flex items-center">
                    <p className="text-xs">
                        <del> ${price + (price / 100) * discount}</del>
                    </p>
                    <p className=" ml-1 text-lg">${price}</p>
                </div>
            </div>
            <div className=" drop-shadow-[_0px_4px_4px_rgba(0,0,0,0.2)] ">
                <button className=" bg-white w-[75%] border-2 py-1 border-black50 rounded-lg font-extrabold tracking-tighter">Book now</button>
            </div>
        </div>
    );
}
