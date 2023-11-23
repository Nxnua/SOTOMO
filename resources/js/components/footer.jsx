export default function Footer() {
    const menu = [
        { id: 1, title: "Trips", link: "" },
        { id: 2, title: "Guides", link: "" },
        { id: 3, title: "Agencies", link: "" },
        { id: 4, title: "Reviews", link: "" },
    ];
    const tripPlanner = [
        { id: 1, title: "Plan a trip", link: "" },
        { id: 2, title: "Travel Budget", link: "" },
        { id: 3, title: "Flights", link: "" },
    ];
    return (
        <div className=" bg-black75 flex flex-col   ">
            <div className=" h-60">
                
                <div className=" h-full grid grid-cols-3 text-gray-200 font-semibold text-md  ">
                    <div className=" relative flex items-center ">
                        <img
                            src="/images/tomo-T.png"
                            alt=""
                            className=" absolute  h-44 ml-32   "
                        />
                        <img
                            src="/images/Tomo-White.png"
                            alt=""
                            className=" h-20 ml-36 "
                        />
                    </div>
                    <div className="flex flex-row py-12 px-20 justify-between tracking-tight m-0">
                        <div>
                            <p className=" text-xl text-orange font-extrabold flex justify-start mb-2 ">
                                Menu
                            </p>

                            <div className=" flex flex-col font-semibold text-md">
                                {menu.map((item, i) => {
                                    return (
                                        <a
                                            key={item.id}
                                            href={item.link}
                                            className=" mt-2  flex justify-start"
                                        >
                                            {item.title}
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                        <div>
                            <p className=" text-xl text-orange font-extrabold flex justify-start mb-2 ">
                                Trip Planner
                            </p>
                            <div className=" flex flex-col ">
                                {tripPlanner.map((item, i) => {
                                    return (
                                        <a
                                            key={item.id}
                                            href={item.link}
                                            className=" mt-2   flex justify-start"
                                        >
                                            {item.title}
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className=" flex flex-col">
                        <div className=" p-12 flex  flex-col ">
                            <p className=" text-xl text-orange font-extrabold flex justify-center mb-2 ">
                                Connect with us
                            </p>
                            <div className=" flex flex-row justify-center">
                                <img
                                    src="/images/phone.svg"
                                    alt=""
                                    className=" w-[20px] mr-1"
                                />
                                <p>+976 99991234</p>
                            </div>
                        </div>
                        <div className=" flex flex-row px-24  justify-evenly">
                                <a href=""><img src="/images/facebook.svg" alt="" className=" "/></a>
                                <a href=""> <img src="/images/instagram.svg" alt="" /></a>
                                <a href=""><img src="/images/twitter.svg" alt="" /></a>
                                <a href=""><img src="/images/mail.svg" alt="" /></a>
                        </div>
                        
                    </div>
                    
                </div>
                <div className=" flex justify-center bg-black75 ">
                <hr className=" w-[80vw] border-[#616161] border-[1px]  "/></div>
                <div className=" bg-[#393535] h-12 flex flex-row justify-between px-20 text-gray-200 text-xs items-center font-medium ">
                    <div>
                        <a href="" className=" mr-10 ">TERMS & CONDITIONS</a>
                        <a href="">PRIVACY POLICY</a>
                    </div>
                    <div>
                    &#169; 2023 <strong>TOMO</strong>. All Rights Reserved.
                    </div>
                </div>
            </div>
        </div>
    );
}
