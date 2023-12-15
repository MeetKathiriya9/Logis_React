import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class About_sec extends Component {
    render() {
        return (
            <div>
                 <section className="home_sec4">
                    <div className="bg-img3 clearfix">
                        <div className="flex1">
                            <h3 className="sec4-h1">About Us</h3>
                            <p className="sec4-h2">Dolor iure expedita id fuga asperiores qui sunt consequatur minima. Quidem voluptas deleniti. Sit quia molestiae quia quas qui magnam itaque veritatis dolores. Corrupti totam ut eius incidunt reiciendis veritatis asperiores placeat.</p>

                            <div className="clearfix box4">
                                <div>
                                    <i className="fa-solid fa-diagram-project" style={{ color: "#0d42ff", fontSize: "43px", paddingRight: "20px" }}></i>
                                </div>
                                <div className="flex3">
                                    <h4 className="sec4-h3">Ullamco laboris nisi ut aliquip consequat</h4>
                                    <p className="sec4-h4">Magni facilis facilis repellendus cum excepturi quaerat praesentium libre trade</p>
                                </div>
                            </div>

                            <div className="clearfix box4">
                                <div>
                                    <i className="fa-sharp fa-solid fa-compress" style={{ color: "#0d42ff", fontSize: "48px", paddingRight: "20px", paddingLeft: "6px" }}></i>
                                </div>
                                <div className="flex3">
                                    <h4 className="sec4-h3">Magnam soluta odio exercitationem reprehenderi</h4>
                                    <p className="sec4-h4">Quo totam dolorum at pariatur aut distinctio dolorum laudantium illo direna pasata redi</p>
                                </div>
                            </div>
                            <div className="clearfix box4">
                                <div>
                                    <i className="fa-solid fa-tower-broadcast" style={{ color: "#0d42ff", fontSize: "43px;", paddingRight: "20px" }}></i>
                                </div>
                                <div className="flex3">
                                    <h4 className="sec4-h3">Voluptatem et qui exercitationem</h4>
                                    <p className="sec4-h4">Et velit et eos maiores est tempora et quos dolorem autem tempora incidunt maxime veniam</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex1 box-div6">
                            <img src="asset/image/about1.jpg" className="about-img" alt='' />
                            <Link to="https://youtu.be/LXb3EKWsInQ"><img src="asset/image/icons8-play-96.png" className="play-btn" alt='' /></Link>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default About_sec