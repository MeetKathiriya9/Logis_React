import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Service_sec from './Service_sec'
import Service_sec2 from './Service_sec2'
import Service_sec3 from './Service_sec3'
import Service_sec4 from './Service_sec4'

export class Service extends Component {
    render() {
        return (
            <div>
                <section className="service_sec2">
                    <div className="sec1">
                        <div className="bg-img1">
                            <h1 className="sec2-h1">Services</h1>
                            <p className="sec2-h2">Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
                        </div>

                        <div className="bg-img2">
                            <p><Link to="website 11.html" className="sec2-h3">Home / </Link> Services</p>
                        </div>
                    </div>
                </section>
                {/* <!-----------------------------section 2 end-----------------------------------> */}



                {/* <!-----------------------------section 3 start----------------------------------->	 */}

                <Service_sec></Service_sec>

                {/* <!-----------------------------section 3  end----------------------------------->	 */}

                {/* <!-----------------------------section 5 start----------------------------------->	 */}
               
                <Service_sec3></Service_sec3>

                {/* <!-----------------------------section 5 end----------------------------------->	 */}

                {/* <!-----------------------------section 7 start---------------------------------->	 */}

                <Service_sec4></Service_sec4>

                {/* <!-----------------------------section 7 end------------------------------------>	 */}

                {/* <!-----------------------------section 9 start----------------------------------> */}
               

                <Service_sec2></Service_sec2>

            </div>
        )
    }
}

export default Service