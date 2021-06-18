import React from 'react'

export default function DiemCuoc() {
    return (
        <div >
            <h3 className="text-center display-4" style={{color:'orangered'}}>Game Bầu Cua </h3>

            <div className="text text-center mt-5">
                <span style={{fontSize:'20px', borderRadius:'10%'}} className="p-3 text-white bg-danger ">Tiền Thưởng: <span className="text-warning">100$</span></span>
            </div>

            <div className="text text-center mt-5">
                <button style={{fontSize:'15px', borderRadius:'10%'}} className="p-3 text-white bg-info ">PLAY!!..</button>
            </div>
        </div>
    )
}
