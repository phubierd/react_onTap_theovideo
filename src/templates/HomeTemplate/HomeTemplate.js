import React from 'react'
import { Route } from 'react-router'
import Header from '../../components/Home/Header/Header'

export default function HomeTemplate(props) {
    return (
        <Route exact path={props.path} render={(propsRoute)=>{
            return <div>
                <Header/>
                <props.component {...propsRoute}/>
            </div>
        }}></Route>
    )
}
