import React from "react";



const Main=()=>{
    return(
        <>
            <div className="section w-full h-auto flex justify-center items-center my-6">
                <div className="container w-[80%] h-aut0  grid grid-cols-4 justify-start items-center gap-x-4 gap-y-10 ">
                    <div className="moviebox w-full h-80 shadow-2xl flex flex-col justify-center items-center p-6 gap-2">
                        <h1 className="text-lg font-semibold">Hacker</h1>
                        <img className="w-full h-full" src="..//public/images/img.jpg" alt="" />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Main