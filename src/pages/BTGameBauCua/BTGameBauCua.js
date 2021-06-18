import React from 'react'
import DiemCuoc from './DiemCuoc'
import DanhSachCuoc from './DanhSachCuoc'
import DanhSachXucXac from './DanhSachXucXac'
import '../../assets/BTGameBauCuaImg/BaiTapGameBauCua.css'


export default function BTGameBauCua() {
    return (
        <div id="BaiTapGameBauCua" className="container">
            <DiemCuoc />

            <div className="row">
                <div className="col-8">
                   <DanhSachCuoc/>

                </div>
                <div className="col-4">
                    <DanhSachXucXac/>
                </div>
            </div>

        </div>
    )
}
