import React from "react";
import { useGlobalContext } from "./context";



const Header=()=>{

    const data = useGlobalContext();
    // const value = "Akash";
    return(
        <>
            <div className="section w-full h-[25vh] flex justify-center items-center my-8">
                <div className="container w-[80%] h-full flex flex-col justify-center items-center gap-4">
                    <h1 className="text-lg">Search Your Favourite Movie {data}</h1>
                    {console.log(data)}
                    <input className=" py-1.5 px-3 rounded-xl w-72 border-2 border-black" type="text" placeholder="Search" />
                </div>
            </div>

        </>
    )
}

export default Header  