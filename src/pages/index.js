import React from "react"

import Layout from "../components/layout"

import parklots from "../static/img/home-parkinglot-collage.png"
import homecourt from "../static/img/home-court-collage.png"

export default function Home() {
  return (
    <Layout>
      <div class="home">
        <div id="main" class="container">
          <div class="col-md-1"></div>
          <a
            href="/parking-lot-services/"
            title="Parking Lot Services"
            id="service-left"
          >
            <div class="col-md-5">
              <h2>Parking Lots</h2>
              <br />
              <img src={parklots} alt=""/>
            </div>
          </a>
          <a
            href="/recreational-court-services/"
            title="Recreational Court Services"
          >
            <div class="col-md-5">
              <h2>Recreational Courts</h2>
              <br />
              <img src={homecourt} alt=""/>
            </div>
          </a>
          <div class="col-md-1"></div>
        </div>
      </div>
    </Layout>
  )
}
