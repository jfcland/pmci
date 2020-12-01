import React from "react"

import logo from "../static/pmci-logo.jpg"

export default function Home() {
  return (
    <div class="container">
      <div class="header">
        <img src={logo} alt="" />
        <div id="navbar">
          <a href="#pl">Parking Lots</a>
          <a href="#rc">References & Photos</a>
          <a href="#em">Email</a>
          <a href="contact">Contact</a>
          <a href="home">Home</a>
        </div>
      </div>
      <div id="main">
        <div>Parking Lots</div>
        <div>Recreational Courts</div>
      </div>
      <div id="footer"></div>
    </div>
  )
}
