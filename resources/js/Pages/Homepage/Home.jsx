
import Landing from "../LandingPage";
import { useState } from "react";
import Main from "./Main";
export default function Home() {
    const [scroll, setScroll] = useState(false);
    const handleScroll = (event) => {
        setScroll(event.currentTarget.scrollTop);
      };
  

    return (
        
        <div >  
             {/* {scroll ? (
            <Main />
        ) : (
            <Landing
                handleScroll={() => {
                    setScroll(true);
                }}
            />
        )} */}
        <Landing/>
        <Main/>
            
        </div>
        
    );
}
