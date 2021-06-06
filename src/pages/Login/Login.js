import React, { useState } from 'react'
import { Prompt } from 'react-router';

export default function Login(props) {

    const [userLogin, setUserLogin] = useState({ userName: '', password: '', status: false })

    console.log(userLogin)
    const handleChange = (event) => {
        const { name, value } = event.target;

        const newUserLogin = {
            ...userLogin,
            [name]: value
        }

        let valid = true;

        for (let key in newUserLogin) {
            if (key != 'status') {
                if (newUserLogin[key].trim() === '') {
                    valid = false;
                }
            }
        }
        if (!valid) {
            newUserLogin.status = true;
        } else {
            newUserLogin.status = false
        }
        setUserLogin(newUserLogin)
    }

    const handleLogin = (event) => {
        // console.log('ok')
        event.preventDefault();
        if (userLogin.userName === 'phuct' && userLogin.password === 'phuct') {
            //Thanh cong thi chuyen về trang trước đó
            props.history.goBack()

            //chuyen den trang chỉ định sau khi xử lý
            // props.history.push('home')
            // props.history.replace('home')

            localStorage.setItem('userLogin', JSON.stringify(userLogin))
        } else {
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




            <Prompt when={userLogin.status} message={(location) => {
                console.log("location", location)
                return "Bạn có chắc muốn rời khỏi trang này!!.."
            }
            } />
        </form>
    )
}
