import React, { Component } from 'react'

export class Show extends Component {
  render() {
    return (
      <div style={{margin:"50px 100px 0px", backgroundColor:"skyblue", padding:"20px 50px"}}>
        <h1 style={{color:"blue", fontSize:"20px"}}>{this.props.name} <br />{this.props.email} <br />{this.props.subject} <br />{this.props.message}</h1>
      </div>
    )
  }
}

export default Show