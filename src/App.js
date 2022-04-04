import React, {Component, useState} from "react"
import logo from "./logo.svg"
import "./App.css"
import Homepage from "./pages/Homepage/Homepage"
import Contact from "./pages/Contact/Contact"
import About from "./pages/About/About"
import Descriptions from "./pages/Descriptions/Descriptions"

import {Browserrouter as Router, Route} from "react-router-dom"

class LambdaDemo extends Component {
  constructor(props) {
    super(props)
    this.state = {loading: false, msg: null}
  }

  handleClick = api => e => {
    e.preventDefault()

    this.setState({ loading: true })
    fetch("/.netlify/functions/" + api)
      .then(response => response.json())
      .then(json => this.setState({ loading: false, msg: json.msg }))
  }

  render() {
    const { loading, msg } = this.state

    return (
      <p>
        <button onClick={this.handleClick("hello")}>{loading ? "Loading... please wait" : "Call Lambda now!"}</button>
        <button
          onClick={this.handleClick("async-dadjoke")}>{loading ? "Loading...please wait" : "Call Async Lambda now!"}</button>
        <br/>
        <span>{msg}</span>
      </p>
    )
  }
}

const Header = ({onClickNav}) => {
  return (
    <nav className="Nav-bar">
      <p>
        <button className="Menu-button" onClick={() => onClickNav("HOME")}>
          Home
        </button>
        <button className="Menu-button" onClick={() => onClickNav("STECKBRIEFE")}>
          Steckbrief
        </button>
        <button className="Menu-button" onClick={() => onClickNav("ABOUT")}>
          Über das Projekt
        </button>
        <button className="Menu-button" onClick={() => onClickNav("CONTACT")}>
          Kontakt
        </button>
      </p>
    </nav>
  )
}

const Footer = () => {

  return (
    <div className="Footer">
      <p>
        Copyright und Kontakt
      </p>
    </div>

  )
}

const App = () => {
  const [displayedPage, setDisplayPage] = useState("HOME");

  return (
    <div>
      <Header onClickNav={setDisplayPage}/>
      {displayedPage === "HOME" && <Homepage/>}
      {displayedPage === "STECKBRIEFE" && <Descriptions/>}
      {displayedPage === "ABOUT" && <About/>}
      {displayedPage === "CONTACT" && <Contact/>}
      <Footer/>
    </div>
  )
}

export default App
