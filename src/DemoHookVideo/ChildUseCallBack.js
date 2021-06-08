import React, { memo } from 'react'

 function ChildUseCallBack(props) {
    let title = 'Chiem Trieu Phu';
    let object = {id:1, name:'PhuCT'}

    console.log('title',title)
    console.log('object',object)
    console.log('reRender')

    return (
        <div>
            <small>{props.callBackRenderNotify()}</small>
            <textarea></textarea>
            <br/>
            <button className='btn btn-info'>Gui</button>
        </div>
    )
}

export default memo(ChildUseCallBack)
