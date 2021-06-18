import React from 'react'

export default function DanhSachXucXac() {
    return (
        <div className="mt-5 ml-5 d-flex">
            <div className="bg-white" style={{borderRadius:'50%' , width:500,height:500, position:'relative'}}></div>
            <div className="row" style={{position:'absolute',top:'20%',left:'25%'}}>
                    <img className="mx-2" style={{width:'100px'}} src={require("../../assets/BTGameBauCuaImg/bau.png").default}/>
                    <img className="mx-2" style={{width:'100px'}} src={require("../../assets/BTGameBauCuaImg/bau.png").default}/>
                    <img className="mx-2" style={{width:'100px'}} src={require("../../assets/BTGameBauCuaImg/bau.png").default}/>
            </div>
        </div>
    )
}
