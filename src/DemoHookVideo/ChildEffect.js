import { cleanup } from '@testing-library/react'
import React, { useEffect,useState } from 'react'

export default function ChildEffect() {
    let [num, setNum] = useState(1);

    console.log('render Child')

    useEffect(() => {
        console.log('mount child')
        
        return () => {
            console.log('will umount')
        }
    }, [num])
    return (
        <div>
           <textarea></textarea><br/><br/>
           <button className="btn btn-success">Gui</button>
        </div>
    )
}
