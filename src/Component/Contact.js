import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Show from './Show';

export class Contact extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: null,
            email: null,
            subject: null,
            message: null,
            show: false,
            isshow: false
        }
    }


    statefull = (event) => {

        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const subject = event.target.subject.value;
        const message = event.target.message.value;

        this.setState({ name, email, subject, message, show: true })
    }

    hide = () => {

        this.setState({ isshow: !this.state.isshow })
        console.log(this.state.isshow)

    }

    render() {

        return (
            <div>

                <section className="contact_sec2">
                    <div className="sec1">
                        <div className="bg-img1">
                            <h1 className="sec2-h1">Contact</h1>
                            <p className="sec2-h2">Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
                        </div>

                        <div className="bg-img2">
                            <p><Link to="website 11.html" className="sec2-h3">Home / </Link> Contact</p>
                        </div>
                    </div>
                </section>

                <button onClick={this.hide}>Toggle</button>
                {/* <!-----------------------------section 2 end-----------------------------------> */}

                {this.state.show === true ? <Show name={this.state.name} email={this.state.email} subject={this.state
                    .subject} message={this.state.message}></Show> : ""}
                    

                {this.state.isshow === true ? (<h1>hello</h1>) : ("")}
                {/* <!-----------------------------section 3 start----------------------------------> */}
                <section className="contact_sec3">
                    <div className="bg-img3">
                        <div className="clearfix box-div1">
                            <div className="flex1">
                                <div className="clearfix box1">
                                    <div className="qaz">
                                        <button className="b-2"><i className="fa-sharp fa-solid fa-location-dot"></i></button>
                                    </div>
                                    <div className="flex3">
                                        <p className="sec3-h1">Location:</p>
                                        <p className="sec3-h2">A108 Adam Street, New York, 535022</p>
                                    </div>
                                </div>

                                <div className="clearfix box1">
                                    <button className="b-3"><i className="fa-solid fa-envelope"></i></button>
                                    <div className="q1">
                                        <p className="sec3-h1">Email:</p>
                                        <p className="sec3-h2">info@example.com</p>
                                    </div>
                                </div>

                                <div className="clearfix box1">
                                    <button className="b-4"><i className="fa-solid fa-mobile"></i></button>
                                    <div className="q2">
                                        <p className="sec3-h1">Call:</p>
                                        <p className="sec3-h2">+1 5589 55488 55</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex3 bg-img4">

                                <form className="f2" onSubmit={this.statefull}>

                                    <input type="text" placeholder="Your Name" className="i1" name="name" />
                                    <input type="email" placeholder="Your Email" className="i2" name="email" />
                                    <input type="text" placeholder="Subject" className="i3" name="subject" />

                                    <textarea className="i4" placeholder="Message" name="message"></textarea>

                                    <button className="b-5" type="submit">Send Message</button>

                                </form>

                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

export default Contact