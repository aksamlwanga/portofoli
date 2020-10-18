import React from 'react'
import {
    Link
} from "react-router-dom";

export default function Header() {
    return (
        <div >
            {/* <h3 >Cover</h3>
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/work">Projects</Link>

                    </nav> */}

            <nav id="colorlib-main-nav" role="navigation">
                <a href="/" class="js-colorlib-nav-toggle colorlib-nav-toggle active"
                ><i></i
                ></a>
                <div className="js-fullheight colorlib-table">
                    <div
                        className="img"
                        style={{ backgroundImage: 'url(images/aksam1.jpg)' }}
                    ></div>
                    <div className="colorlib-table-cell js-fullheight">
                        <div className="row no-gutters">
                            <div className="col-md-12 text-center">
                                <h1 className="mb-4">
                                    <a href="/" className="logo">LWANGA AKSAM</a>
                                </h1>
                                <ul>
                                    <li className>
                                        <a href="/"
                                        ><span>Home</span></a
                                        >
                                    </li>
                                    <li>
                                        <a href="/about"
                                        ><span>About</span></a
                                        >
                                    </li>
                                    <li>
                                        <a href="/contact"
                                        ><span>Contact</span></a
                                        >
                                    </li>
                                    <li  className="active">
                                        <a href="/work"
                                        ><span>Projects</span></a
                                        >
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <header>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="colorlib-navbar-brand">
                                <a class="colorlib-logo" href="index.html"
                                ><span
                                    class="logo-img"
                                  style={{ backgroundImage: 'url(images/lwanga.jpg)' }}
                                ></span
                                    >LWANGA AKSAM</a
                                >
                            </div>
                            <a href="/" class="js-colorlib-nav-toggle colorlib-nav-toggle"
                            ><i></i
                            ></a>
                        </div>
                    </div>
                </div>
            </header>
        </div>

    )
}
