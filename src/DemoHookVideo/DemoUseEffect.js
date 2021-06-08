import React, { useEffect, useState } from 'react'
import ChildEffect from './ChildEffect';

export default function DemoUseEffect(props) {
    let [num, setNum] = useState(1);

    //useEffect là hàm chạy sau khi giao diện render thay cho didUpdate và didMount trong mọi trường hợp
    useEffect(() => {
        console.log('hàm dc thực thi sau mỗi lần render');
        console.log('cách viết này ứng với cả 2 lifecycle didmount & didUpdate');
    })

    //cách viết thay thế component didMount
    useEffect(()=>{
        console.log('didmount')
    },[])


    useEffect(() => {
        console.log('hàm gọi sau lần render đầu tiên');

        return () => {
            console.log('hàm định nghĩa bên trong đây sẽ dc gọi cuối cùng thay willUnmount');
        }
    }, [num])

    useEffect(() => {
        console.log('hàm gọi mỗi khi number(state) thay đổi sau khi render! thay didUpdate')
    }, [num]) //num là giá trị nếu bị thay đổi sau render thì useEffect này sẽ chạy lại

    const handleIncrease = () => {
        setNum(num + 1)
    }

    console.log('render')
    return (
        <div className="container">
            <div className="card text-left" style={{ height: '300px', width: '200px' }}>
                <img className="card-img-top" src="https://picsum.photos/200/200" alt style={{ height: '200px', width: '200px' }} />
                <div className="card-body">
                    <h4 className="card-title">{num}♥</h4>
                    
                    <button className="btn btn-info" onClick={handleIncrease}>+</button>
                </div>
            </div>
        {num ===1 ? <ChildEffect/>: ''}
        </div>
    )
}
