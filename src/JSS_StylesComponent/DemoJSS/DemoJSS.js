import React, { Component } from 'react'
import { Button, SmallButton } from '../Components/Button'

export default class DemoJSS extends Component {
    render() {
        return (
            <div>
                <Button>Hello!</Button>
                <Button primary>Hello!</Button>
                <SmallButton >smallButton</SmallButton>
            </div>
        )
    }
}
