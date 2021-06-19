import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function DiemCuoc(props) {

    const {tongDiem} = useSelector(state=>state.BTGameBauCuaReducer)
    const dispatch= useDispatch();
    return (
        <div >
            <h3 className="text-center display-4" style={{color:'orangered'}}>Game Bầu Cua </h3>

            <div className="text text-center mt-5">
                <span style={{fontSize:'20px', borderRadius:'10%'}} className="p-3 text-white bg-danger ">Tiền Thưởng: <span className="text-warning">{tongDiem.toLocaleString()}$</span></span>
            </div>

            <div className="text text-center mt-5">
                <button onClick={()=>{
                    dispatch({
                        type:'CHOI_LAI'
                    })
                }} style={{fontSize:'15px', borderRadius:'10%'}} className="p-3 text-white bg-info ">PLAY AGAIN !!..</button>
            </div>
        </div>
    )
}
