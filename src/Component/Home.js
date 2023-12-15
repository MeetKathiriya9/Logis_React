import React, { Component } from 'react'

import Service_sec from './Service_sec'
import About_sec from './About_sec'
import Service_sec2 from './Service_sec2'
import Service_sec3 from './Service_sec3'
import Service_sec4 from './Service_sec4'
import Price_sec from './Price_sec'

export class Home extends Component {
    render() {
        return (
            <div>
                <section className="home_sec2">
                    <div className="bg-img1">
                        <div className="box-div2 clearfix">
                            <div className="flex1 box-div3">
                                <h2 className="sec2-h1">Your Lightning Fast Delivery Partner</h2>

                                <p className="sec2-h2">Facere distinctio molestiae nisi fugit tenetur repellat non praesentium nesciunt optio quis sit odio nemo quisquam. eius quos reiciendis eum vel eum voluptatem eum maiores eaque id optio ullam occaecati odio est possimus vel reprehenderit</p>

                                <form className="f1">
                                    <input type="search" placeholder="ZIP code or CITY" className="sec2-h3" />
                                    <button className="b-2">Search</button>
                                </form>

                                <div className="clearfix box-div1">
                                    <div className="clearfix m">
                                        <div className="box1">
                                            <p className="sec2-h4">232</p>
                                            <p className="sec2-h5">clients</p>
                                        </div>
                                        <div className="box1">
                                            <p className="sec2-h4">521</p>
                                            <p className="sec2-h5">projects</p>
                                        </div>
                                    </div>
                                    <div className="clearfix m">
                                        <div className="box1">
                                            <p className="sec2-h4">1453</p>
                                            <p className="sec2-h5">support</p>
                                        </div>
                                        <div className="box7">
                                            <p className="sec2-h4">32</p>
                                            <p className="sec2-h5">workers</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex1">
                                <img src="asset/image/hero-img.svg" className="hero-img" alt='' />
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-----------------------------section 2 end-----------------------------------> */}


                {/* <!-----------------------------section 3 start----------------------------------->	 */}
                
                <Service_sec></Service_sec>

                {/* <!-----------------------------section 3  end----------------------------------->	 */}


                {/* <!-----------------------------section 4  start----------------------------------->	 */}
               
                <About_sec></About_sec>

                {/* <!-----------------------------section 4  end----------------------------------->	 */}


                {/* <!-----------------------------section 5 start----------------------------------->	 */}
               
                <Service_sec3></Service_sec3>

                {/* <!-----------------------------section 5 end----------------------------------->	 */}



                {/* <!-----------------------------section 6 start---------------------------------->	 */}
                <section className="home_sec6">
                    <div className="bg-img5">
                        <h3 className="sec6-h1">Call To Action</h3>

                        <p className="sec6-h2">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                        <button className="b-3">Call To Action</button>
                    </div>
                </section>
                {/* <!-----------------------------section 6 end------------------------------------>	 */}


                {/* <!-----------------------------section 7 start---------------------------------->	 */}

                <Service_sec4></Service_sec4>

                {/* <!-----------------------------section 7 end------------------------------------>	 */}

                {/* <!-----------------------------section 9 start----------------------------------> */}
              
                <Service_sec2></Service_sec2>

                {/* <!-----------------------------section 9 end------------------------------------> */}

                {/* <!-----------------------------section 8 start----------------------------------> */}

                <Price_sec></Price_sec>
                
            </div>
        )
    }
}

export default Home