import React from 'react'
import DiemCuoc from './DiemCuoc'
import DanhSachCuoc from './DanhSachCuoc'
import DanhSachXucXac from './DanhSachXucXac'
import '../../assets/BTGameBauCuaImg/BaiTapGameBauCua.css'
import { useDispatch } from 'react-redux'


export default function BTGameBauCua() {
    
    return (
        <div id="BaiTapGameBauCua" className="container">
            <DiemCuoc />

            <div className="row">
                <div className="col-6">
                   <DanhSachCuoc/>

                </div>
                <div className="col-6">
                    <DanhSachXucXac/>
                </div>
            </div>

        </div>
    )
}
