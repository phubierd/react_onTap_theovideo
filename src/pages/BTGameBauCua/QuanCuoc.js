import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function QuanCuoc(props) {
    // console.log(props)
    const { quanCuoc } = props
    // console.log(quanCuoc, 'quanCuoc')

    const dispatch = useDispatch();

    return (
        <div className="mt-3">
            <img src={quanCuoc.hinhAnh} width="100%" height="100%" alt="" />
            <div className="text-center bg-dark">
                <div className="row">
                    <div className="col-4">
                        <button onClick={()=>{
                            dispatch({
                                type:'DAT_CUOC_BAU_CUA',
                                quanCuoc,
                                tangGiam:true
                            })
                        }} className=" my-2  display-5 m-auto " style={{ fontSize: '35px', borderRadius: '5px' }} >+</button>

                    </div>
                    <div className="col-4">
                        <span className="text-danger m-auto" style={{ fontSize: '35px' }} >{quanCuoc.diemCuoc}</span>

                    </div>
                    <div className="col-4">
                        <button onClick={()=>{
                            dispatch({
                                type:'DAT_CUOC_BAU_CUA',
                                quanCuoc,
                                tangGiam:false
                            })
                        }} className=" mt-2 display-5 m-auto " style={{ fontSize: '35px', borderRadius: '5px' }} >-</button>

                    </div>
                </div>
            </div>
        </div>
    )
}
