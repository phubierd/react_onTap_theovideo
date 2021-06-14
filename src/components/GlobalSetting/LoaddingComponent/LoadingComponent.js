import React from 'react'
import { useSelector } from 'react-redux'
import styleLoading from './LoadingComponent.module.css'

export default function LoadingComponent() {

    const { isLoading } = useSelector(state => state.LoadingReducer)

    if (isLoading) {
        return (
            <div className={styleLoading.bgLoading}>
                <img src={require('../../../assets/imgLoading/fluid-loader.gif').default} />
                {/* <img src='../src/assets/imgLoading/fluid-loader.gif'/> */}

            </div>
        )
    }else{
        return ''
    }
}
