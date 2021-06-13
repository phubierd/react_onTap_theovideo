import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

export default function Header() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <a className="navbar-brand" href="#">PhuCT</a>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <NavLink activeClassName="activeNavItem" activeStyle={{ fontWeight: 'bold' }} className="nav-link" to="/home">Home <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="activeNavItem" activeStyle={{ fontWeight: 'bold' }} className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="activeNavItem" activeStyle={{ fontWeight: 'bold' }} className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="activeNavItem" activeStyle={{ fontWeight: 'bold' }} className="nav-link" to="/login">Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="activeNavItem" activeStyle={{ fontWeight: 'bold' }} className="nav-link" to="/detail">Detail</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="activeNavItem" activeStyle={{ fontWeight: 'bold' }} className="nav-link" to="/profile">Profile</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">DemoHooks</a>
                        <div className="dropdown-menu" aria-labelledby="dropdownId">
                            <NavLink className="dropdown-item" to="/demouseeffect">Demo UseEffect</NavLink>
                            <NavLink className="dropdown-item" to="/demousecallback">Demo UseCallBack</NavLink>
                            <NavLink className="dropdown-item" to="/demousememo">Demo UseMemo</NavLink>
                            <NavLink className="dropdown-item" to="/demouseref">Demo useRef</NavLink>
                            <NavLink className="dropdown-item" to="/demousereducer">Demo UseReducer</NavLink>
                            <NavLink className="dropdown-item" to="/demousecontext">Demo UseContext</NavLink>
                            <NavLink className="dropdown-item" to="/demoredux">Demo Redux</NavLink>

                        </div>

                    </li>
                    <li className="nav-item dropdown bg-dark">
                        <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Demo TodoList</a>
                        <div className="dropdown-menu" aria-labelledby="dropdownId">
                            <NavLink activeClassName="todolist" activeStyle={{ fontWeight: 'bold' }} className="dropdown-item" to="/todolistrcc">TodoList-rcc</NavLink>
                            <NavLink activeClassName="todolist" activeStyle={{ fontWeight: 'bold' }} className="dropdown-item" to="/todolistrfc">TodoList-rfc</NavLink>
                            <NavLink activeClassName="todolist" activeStyle={{ fontWeight: 'bold' }} className="dropdown-item" to="/todolistredux">TodoList-Redux</NavLink>
                            <NavLink activeClassName="todolist" activeStyle={{ fontWeight: 'bold' }} className="dropdown-item" to="/todolistpractise">TodoList-Practise</NavLink>
                            <NavLink activeClassName="todolist" activeStyle={{ fontWeight: 'bold' }} className="dropdown-item" to="/todolistsaga">TodoList-Saga</NavLink>
                        </div>
                    </li>
                   
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>


    )
}
