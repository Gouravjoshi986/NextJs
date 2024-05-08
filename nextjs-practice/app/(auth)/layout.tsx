import React from "react";
export default function({children}:{
    children:React.ReactNode,
}){
    return (
        <>
        <div className="border-b p-2 text-center">
            Signup and Get Early offers.
        </div>
        {children}
        </>
    )
}