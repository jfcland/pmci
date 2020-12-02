import React from "react"

import logo from "../static/pmci-logo.jpg"
import parklots from "../static/img/home-parkinglot-collage.png"
import homecourt from "../static/img/home-court-collage.png"

export default function Home() {
  return (
    <div class="container">
      <div id="header">
        <img src={logo} alt="" />
        <div id="main-nav" class="nav navbar-default">
          <a href="#pl">Parking Lots</a>
          <a href="#rc">References & Photos</a>
          <a href="#em">Email</a>
          <a href="contact">Contact</a>
          <a href="home">Home</a>
        </div>
      </div>
      <div id="main" class="container">
        <div id="leftcolumn">
          Parking Lots
          <img src={parklots} />
        </div>
        <div id="rightcolumn">
          Recreational Courts
          <img src={homecourt} />
        </div>
      </div>
      <div id="footer"></div>
    </div>
  )
}
