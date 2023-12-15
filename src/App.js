import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Header from './Component/Header';
import Home from './Component/Home';
import About from './Component/About';
import Service from './Component/Service';
import Price from './Component/Price';
import Contact from './Component/Contact';
import Footer from './Component/Footer';

import About_child from './Component/About_child'


export class App extends Component {

  constructor(props) {
    super(props)
    this.props = props;

    this.state = {
       posts:null
    }
  }

  componentDidMount(){

      axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
        this.setState({posts : response.data},() => {
          console.log("hello",this)
        })
      }).catch((err) => {
        console.log(err);
      })

  }

  render() {

    let abc;

    if(this.state.posts!= null){
      abc = this.state.posts.map((q) => {
        return <About_child title={q.title} body={q.body}></About_child>
      })
    }

    return (
      <div>
      <Router>

          <Header></Header>

          <Routes>
              <Route path='/' element={<Home></Home>}></Route>
              <Route path='/about' element={<About>{abc}</About>}></Route>
              <Route path='/service' element={<Service></Service>}></Route>
              <Route path='/price' element={<Price></Price>}></Route>
              <Route path='/contact' element={<Contact></Contact>}></Route>
          </Routes>

          <Footer></Footer>
      </Router>
  </div>
    )
  }
}

export default App
