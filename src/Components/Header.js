import React, {Component} from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTimes} from '@fortawesome/free-solid-svg-icons'




import './Header.scss'

class Header extends React.Component {
    constructor(props){
        super(props)
        this.state= {
            showMenu : false
        }
        this.handleMenu = this.handleMenu.bind(this)
    }
    onRouteChange (pageId) {
        console.log('vcvcvbc');
    }

    handleMenu(){
        console.log('sss')
        this.setState({showMenu : !this.state.showMenu})
    }
    render(){
        return(
            <nav className='navbar navbar-expand-lg fixed-top'>
                <div className='container'>
                <a href='www.mahendran.in' className='navbar-brand logo'>MAHENDRAN.in</a>
                <button className='navbar-toggler collapsed' onClick={this.handleMenu}>{this.state.showMenu ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}</button>
                <div  className={this.state.showMenu ? 'navbar-collapse collapsed': 'navbar-collapse collapse' }>
                    <ul className='navbar-nav ml-auto'>
                        <Link to="/" className='nav-item'>Home</Link>
                        <Link to="/about" className='nav-item'>About</Link>
                        <Link to="/service" className='nav-item'>Service</Link>
                        <Link to="/contact" className='nav-item'>Contact</Link>
                    </ul>
                </div>
                </div>
            </nav>
        )
    }
}

export default Header;