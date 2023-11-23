export default function Start({ startHandler }) {
    return (
        <div  className="float-right rounded-2xl h-[100vh] bg-white w-[30vw] flex flex-col">
            <div className=" flex justify-end m-4">
                <a href="">
                    <img src="images/darkmoon.png" alt="" width={25} height={25} className="hover:opacity-70" />
                </a>
            </div>
            <h1 className="flex justify-center mx-auto mt-[1vh] text-3xl font-extrabold tracking-tight text-orange">
                Hi, I'm Tomo!
            </h1>
            <div className=" flex flex-row items-center">
                <p className="m-5 text-center text-sm tracking-tighter font-semibold  ">
                I am passionate about travel and helping you create unforgettable adventures. Passionately devoted to travel, I ensure your journeys are the most secure and comprehensive. Choose your travel destination with me! 
                </p>
                <img
                    src="images/tomo-green.png"
                    alt=""
                    className=" w-[28vh] mt-10"
                />
            </div>
           

            <button
                className=" mt-[6vh] flex justify-center "
                onClick={() => startHandler()}
            >
                <div className=" bg-orange text-white rounded-full hover:bg-warning hover:border-warning font-bold px-10 py-3   text-xl">
                    Start
                </div>
            </button>
        </div>
    );
}
