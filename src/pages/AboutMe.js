import React, { Component } from 'react';
import Header from '../Components/Header';

class AboutMe extends Component {
    render() {
        return (
            <div>
                <Header />
                <section className="ftco-section about-section">
                    <div className="container">
                        <div className="row d-flex" data-scrollax-parent="true">
                            <div className="col-md-4 author-img" style={{backgroundImage: 'url(images/lwanga.jpg)'}} data-scrollax=" properties: { translateY: '-70%'}"></div>
                            <div className="col-md-2"></div>
                            <div className="col-md-6 wrap ftco-animate">
                                <div className="about-desc">
                                    <h1 className="bold-text">About</h1>
                                    <div className="p-5">
                                        <h2 className="mb-5">Hi! I'm Lwanga Aksam</h2>
                                        <p> Far away from Uganda ,I studied from Makerere University and attained a Degree of Bachelors of Science in software Engineering .
                                            Am whom I'm and i love knowing that I develop softwares that are aimed to improve peoples' lives.
                                            I love the fact that i am Muslim.
                                        </p>
                                        <p><a href="/">Checkout my resume</a></p>
                                        <ul className="ftco-footer-social list-unstyled mt-4">
                                            <li><a href="/"><span className="icon-twitter"></span></a></li>
                                            <li><a href="/"><span className="icon-facebook"></span></a></li>
                                            <li><a href="/"><span className="icon-instagram"></span></a></li>
                                        </ul>
                                        <h5>Contact me here!</h5>
                                        <p>Email: <a href="/">lwangaaksam@gmail.com</a></p>
                                        <p>Phone: <a href="/">0751109725</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default AboutMe;