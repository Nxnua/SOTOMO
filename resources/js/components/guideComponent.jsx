export default function Guide({ name, description, image, review, star }) {
    return <div className="  bg-white rounded-xl h-[20vw] border-[1px] border-neutral-100 drop-shadow-[_0px_15px_15px_rgba(0,0,0,0.05)] flex flex-row">
        <div className=" w-[40%]  flex flex-col justify-between">
            <div className=" rounded-lg border-[1px] border-neutral-200">
                <img src={image} alt="" className=" w-[100%]  " />
            </div>
            <div>
                {name}
            </div>
            <div className=" flex justify-center ">
                Languages
                Languages
                Languages
            </div>
        </div>
        <div className=" flex-1">

        </div>

    </div>;
}
