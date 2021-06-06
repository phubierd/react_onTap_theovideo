import React, { useState } from 'react'

export default function Login(props) {

    const [userLogin, setUserLogin] = useState({ userName: '', password: '' })

    console.log(userLogin)
    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserLogin({
          ...userLogin,  
          [name]:value
        })
    }

    const handleLogin = (event)=>{
        // console.log('ok')
        event.preventDefault();
        if (userLogin.userName ==='phuct' && userLogin.password==='phuct'){
            //Thanh cong thi chuyen về trang trước đó
            // props.history.goBack()

            //chuyen den trang chỉ định sau khi xử lý
            // props.history.push('home')
            props.history.replace('home')
        }else{
            alert('Login Fail')
            return
        }
    }

    return (
        <form className="container" onSubmit={handleLogin}>
            <h3 className="display-4">Login</h3>
            <div className="form-group">
                <p>User Name</p>
                <input name="userName" className="form-control" onChange={handleChange}></input>
            </div>
            <div className="form-group">
                <p>Password</p>
                <input name="password" className="form-control" onChange={handleChange}></input>
            </div>
            <div className="form-group">
                <button className="btn btn-success">Login</button>
            </div>
        </form>
    )
}
