import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Header extends Component {
    render() {
        return (
            <div>
                <section className="home_sec1">
                    <div className="menubar clearfix">
                        <div className="flex1">
                            <h1 className="sec1-h1">LOGIS</h1>
                        </div>

                        <ul className="menu flex2">
                            <li><Link to="/">HOME</Link></li>
                            <li><Link to="about">ABOUT</Link></li>
                            <li><Link to="service">SERVICES</Link></li>
                            <li><Link to="price">PRICING</Link></li>
                            <li><Link to="contact">CONTACTS</Link></li>
                        </ul>

                        <div className="flex1">
                            <button className="b-1">GET A QUOTE</button>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Header