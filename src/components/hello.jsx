import React, { Component } from 'react';

class Hello extends Component {
    constructor(props) {
        super(props);
        this.state = {greeting:'reactjs'};
        console.log('Hello');
        console.log('props:', props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState({greeting:'hello react'});
    }

    render() {
        return (
            <div>
                <h1>{this.props.greet}</h1>
                <button id="submit" onClick={this.handleClick} > Click me </button>
            </div>
        )
    }
}

export default Hello;