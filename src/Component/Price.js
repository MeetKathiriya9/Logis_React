import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Price_sec from './Price_sec'

export class Price extends Component {
    render() {
        return (
            <div>
                <section className="pricing_sec2">
                    <div className="sec1">
                        <div className="bg-img1">
                            <h1 className="sec2-h1">Pricing</h1>
                            <p className="sec2-h2">Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
                        </div>

                        <div className="bg-img2">
                            <p><Link to="website 11.html" className="sec2-h3">Home / </Link> Pricing</p>
                        </div>
                    </div>
                </section>
                {/* <!-----------------------------section 2 end-----------------------------------> */}


                {/* <!-----------------------------section 8 start----------------------------------> */}
                <Price_sec></Price_sec>
            </div>
        )
    }
}

export default Price