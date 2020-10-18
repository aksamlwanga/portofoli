import React, { Component } from 'react';
import Header from '../Components/Header';

class MyWork extends Component {
    render() {
        return (
            <div>
                <Header />
                <section class="ftco-section">
                    <div class="container mt-5">
                        <div class="row justify-content-center mb-5 pb-5">
                            <div class="col-md-7 text-center heading-section ftco-animate">
                                <span>Portfolio</span>
                                <h2>Checkout a few of my works</h2>
                            </div>
                        </div>
                        <div class="row no-gutters">
                            <div class="block-3 d-md-flex ftco-animate" data-scrollax-parent="true">
                                <a href="/work" class="image d-flex justify-content-center align-items-center" style={{ backgroundImage: "url('images/work-1.jpg')" }} data-scrollax=" properties: { translateY: '-30%'}">
                                    <div class="icon d-flex text-center justify-content-center align-items-center">
                                        <span class="icon-search"></span>
                                    </div>
                                </a>
                                <div class="text">
                                    <h4 class="subheading">GADS 2020 Mobile Project</h4>
                                    <h2 class="heading"><a href="/work">The moblie Application</a></h2>
                                    <p>The mobile application was developed to display all top 20 learnings in GADS project 2020,The participants were required to submit a link and screenshort of there project.</p>
                                    <p><a href="https://github.com/aksamlwanga/gads2020project">View Project</a></p>
                                </div>
                            </div>
                            <div class="block-3 d-md-flex ftco-animate" data-scrollax-parent="true">
                                <a href="/work" class="image order-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: "url('images/work-2.jpg')" }} data-scrollax=" properties: { translateY: '-30%'}">
                                    <div class="icon d-flex text-center justify-content-center align-items-center">
                                        <span class="icon-search"></span>
                                    </div>
                                </a>
                                <div class="text order-1">
                                    <h4 class="subheading">Resort App</h4>
                                    <h2 class="heading"><a href="/work">The website to display Hotel rooms </a></h2>
                                    <p>You are able to search for all kind of rooms you want.Single ,Double ,pet allowed.</p>
                                    <p><a href="https://aksam-resort.netlify.app/rooms">View Project</a></p>
                                </div>
                            </div>
                            <div class="block-3 d-md-flex ftco-animate" data-scrollax-parent="true">
                                <a href="/work" class="image d-flex justify-content-center align-items-center" style={{ backgroundImage: "url('images/work-3.jpg'); " }} data-scrollax=" properties: { translateY: '-30%'}">
                                    <div class="icon d-flex text-center justify-content-center align-items-center">
                                        <span class="icon-search"></span>
                                    </div>
                                </a>
                                <div class="text">
                                    <h4 class="subheading">WiseLand Project </h4>
                                    <h2 class="heading"><a href="/work"> Website about wiseLand Agency </a></h2>
                                    <p>Contains the details about wiseland ,the servicess offered by wiseland .You can also send message and get notifed abou the near</p>
                                    <p><a href="https://aksam.000webhostapp.com/">View Project</a></p>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-5">
                            <div class="col text-center">
                                <div class="block-27">
                                    <ul>
                                        <li><a href="1">&lt;</a></li>
                                        <li class="2"><span>1</span></li>
                                        <li><a href="3">2</a></li>
                                        
                                        <li><a href="4">&gt;</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default MyWork;