import React, {Component, useState} from "react"

import "./App.css"
import Homepage from "./pages/Homepage/Homepage"
import Contact from "./pages/Contact/Contact"
import About from "./pages/About/About"
import Descriptions from "./pages/Descriptions/Descriptions"

import {Browserrouter as Router, Route} from "react-router-dom"


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
