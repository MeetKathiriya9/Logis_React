import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import About_sec from './About_sec'
import Service_sec2 from './Service_sec2'

export class About extends Component {

    constructor(props) {
        super(props)
        this.props = props;
    }
    render() {
        return (
            <div>
                <section className="about_sec2">
                    <div className="sec1">
                        <div className="bg-img1">
                            <h1 className="sec2-h1">About</h1>
                            <p className="sec2-h2">Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
                        </div>

                        <div className="bg-img2">
                            <p><Link to="website 11.html" className="sec2-h3">Home / </Link> About</p>
                        </div>
                    </div>
                </section>
                {/* <!-----------------------------section 2 end-----------------------------------> */}


                {this.props.children}

                {/* <!-----------------------------section 3 start----------------------------------->	 */}

                <About_sec></About_sec>

                {/* <!-----------------------------section 3 end----------------------------------->	 */}


                {/* <!-----------------------------section 4 start--------------------------------->	 */}
                <section className="about_sec4">
                    <div className="bg-img4">
                        <div className="clearfix box-div1">

                            <div className="flex1 clearfix box3">
                                <div className="box1 flex1">
                                    <h3 className="sec3-h1">232</h3>
                                    <hr className="hr1"></hr>
                                    <p className="sec3-h2">Clients</p>
                                </div>
                                <div className="box1 flex1">
                                    <h3 className="sec3-h1">521</h3>
                                    <hr className="hr1"></hr>
                                    <p className="sec3-h2">Projects</p>
                                </div>
                            </div>

                            <div className="flex1 clearfix box3">
                                <div className="box1 flex1">
                                    <h3 className="sec3-h1">1453</h3>
                                    <hr className="hr1"></hr>
                                    <p className="sec3-h2">Hours Of Support</p>
                                </div>
                                <div className="box2 flex1">
                                    <h3 className="sec3-h1">32</h3>
                                    <hr className="hr1"></hr>
                                    <p className="sec3-h2">Workers</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                {/* <!-----------------------------section 4 end----------------------------------->	 */}



                {/* <!-----------------------------section 5 start--------------------------------->	 */}
                <section className="about_sec5">
                    <div className="bg-img5">
                        <h2 className="sec5-h4">OUR TEAM</h2>
                        <div className="clearfix box-div4">
                            <div className="flex1 box-div2">
                                <img src="asset/image/team-1 (1).jpg" className="t-img1" alt='' />

                                <div>
                                    <h6 className="sec5-h1">Walter White</h6>
                                    <p className="sec5-h2">Web Development</p>

                                    <p className="sec5-h3">Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut</p>

                                    <div className="clearfix box5">
                                        <i className="fa-brands fa-twitter i1"></i>
                                        <i className="fa-brands fa-facebook i1"></i>
                                        <i className="fa-brands fa-instagram i1"></i>
                                        <i className="fa-brands fa-linkedin i2"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="flex1 box-div2">
                                <img src="asset/image/team-2 (1).jpg" className="t-img1" alt='' />
                                <div>
                                    <h6 className="sec5-h1">Sarah Jhinson</h6>
                                    <p className="sec5-h2">Marketing</p>

                                    <p className="sec5-h3">Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus. In architecto rerum rerum temporibus</p>

                                    <div className="clearfix box5">
                                        <i className="fa-brands fa-twitter i1"></i>
                                        <i className="fa-brands fa-facebook i1"></i>
                                        <i className="fa-brands fa-instagram i1"></i>
                                        <i className="fa-brands fa-linkedin i2"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="flex1 box-div3">
                                <img src="asset/image/team-3 (1).jpg" className="t-img1" alt='' />

                                <div>
                                    <h6 className="sec5-h1">William Anderson</h6>
                                    <p className="sec5-h2">Content</p>

                                    <p className="sec5-h3">Voluptas necessitatibus occaecati quia. Earum totam consequuntur qui porro et laborum toro des clara</p>

                                    <div className="clearfix box5">
                                        <i className="fa-brands fa-twitter i1"></i>
                                        <i className="fa-brands fa-facebook i1"></i>
                                        <i className="fa-brands fa-instagram i1"></i>
                                        <i className="fa-brands fa-linkedin i2"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-----------------------------section 5 end----------------------------------->	 */}


                <Service_sec2></Service_sec2>

            </div>
        )
    }
}

export default About