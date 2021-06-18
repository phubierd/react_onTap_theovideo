import React from 'react'

export default function QuanCuoc() {
    return (
        <div className="mt-3">
            <img src={require("../../assets/BTGameBauCuaImg/ga.png").default} width="100%" height="100%" alt="" />
            <div className="text-center bg-dark">
                <button className=" my-2  display-5 mr-3" style={{fontSize:'35px',borderRadius:'5px'}} >+</button>
                <span className="text-danger display-4" >100</span>
                <button className=" mt-2 display-5 ml-3" style={{fontSize:'35px',borderRadius:'5px'}} >-</button>
            </div>
        </div>
    )
}
