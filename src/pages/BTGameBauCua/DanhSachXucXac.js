import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import XucXac from './XucXac'
export default function DanhSachXucXac() {

    const { mangXucXac } = useSelector(state => state.BTGameBauCuaReducer)
    const dispatch = useDispatch();

    const renderMangXucXac = () => {
        return mangXucXac.map((item, index) => {
            return <div key={index}>
                <XucXac xucXac={item} />
            </div>
        })
    }


    return (

        <Fragment>
            <div className="mt-5 ml-5 d-flex">
                <div className="bg-white" style={{ borderRadius: '50%', width: 500, height: 500, position: 'relative' }}></div>
                <div className="row text-center" style={{ position: 'absolute', top: '30%', left: '15%' }}>

                    {renderMangXucXac()}

                </div>

            </div>
            <div className="text-center">
                <button onClick={()=>{
                    dispatch({
                        type:'PLAY_GAME_BAU_CUA',
                    })
                }} className="btn btn-success display-5">Lắc Lắc Lắc...</button>
            </div>
        </Fragment>
    )
}
