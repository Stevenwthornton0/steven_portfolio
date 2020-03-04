import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {

    state = {
        dropDown: false
    }

    showNav = () => {
        this.setState({
            dropDown: !this.state.dropDown
        })
    }

    navFalse = () => {
        this.setState({
            dropDown: false
        })
    }

    render() {
        return (
            <nav className='navigation'>
                <Link to="./">Steven Thornton</Link>
                <button className='hamburger' onClick={this.showNav}>&#9776;</button>
                <div className='topNav' id='myTopNav'>
                    <Link to="./">Home</Link>
                    <Link to="./projects">Projects</Link>
                </div>

                {this.state.dropDown && 
                    <div className='dropdown'>
                        <Link onClick={this.navFalse} to={'/'}>Home</Link>
                        <Link onClick={this.navFalse} to={'/aboutme'}>About Me</Link>
                        <Link onClick={this.navFalse} to={'/projects'}>Projects</Link>
                    </div>
                }
            </nav>
        )
    }
}

export default Header;