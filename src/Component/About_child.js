import React, { Component } from 'react'

export class About_child extends Component {
    constructor(props) {
      super(props)
    this.props = props;
    }
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        
        <p>{this.props.body}</p>
      </div>
    )
  }
}

export default About_child