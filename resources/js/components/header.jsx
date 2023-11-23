export default function Header(){
    return (


        <nav className="flex  h-vw[1] mx-auto border-b-[1px] rounded-sm border-black-500  justify-between items-center h-[86px]   ">

            <div className="float-left ms-10">
            <img src="images/Logo.png" alt="" width={140} height={72} />
            </div>
            <div className="md:static float-right absolute md:min-h-fit min-h-[60vh] left-0 top-[86px] md:w-auto w-full flex items-center">
                <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 mx-auto">
                    <li className="hover:text-gray-500">
                        <a href="">Trips</a>
                    </li>
                    <li className="hover:text-gray-500">
                        <a href="">Travel Guides</a>
                    </li>
                    <li className="hover:text-gray-500">
                        <a href="">More</a>
                    </li>
                    
                </ul>
            </div>
            <div className="bg-white float-right mr-10" >
                <ul className="flex items-right gap-[1vw]">
                    <li>
                        <a href="">
                            <img src="images/image 1.png" alt="" width={30} height={30} className="mt-[5px] hover:opacity-70"/>
                        </a>
                    </li>
                    <li>
                    <button className="bg-white border-4 border-orange text-orange px-6 py-1 rounded-2xl hover:bg-warning hover:text-white">Sign In</button>
                    <button className="ml-2 border-4 border-orange bg-orange text-white px-6 py-1 rounded-2xl hover:bg-orange">Sign Up</button>
                    </li>
                    <li>
                        <a href=""><img src="images/darkmoon.png" alt="" width={30} height={30} className=" hover:opacity-70"/></a>
                    </li>
                </ul>
            </div>

        </nav>
       
    );
}