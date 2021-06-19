import React, { Fragment } from 'react'

export default function XucXac(props) {

    const {xucXac} = props
    return (
        <Fragment>
            <img className="mx-2" style={{width:'100px'}} src={xucXac.hinhAnh}/>
        </Fragment>
    )
}
