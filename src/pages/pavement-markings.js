import React from 'react'

import Layout from '../components/layout'

import img1 from "../static/img/secondary/pavement-markings_01.jpg"
import img2 from "../static/img/secondary/pavement-markings_02.jpg"


export default function SuccessPage() {
  return (
    <Layout>
      <div class="row">
        <div class="col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-1" id="service-name">
          <h1>Pavement Markings</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-1">

          <div class="service-photo">
            <div><img src={img1} alt=""/></div>
            <div class="caption">Parking Lot Traffic Markings</div>
          </div>

          <div class="service-photo">
            <div><img src={img2} alt=""/></div>
            <div class="caption">Traffic Control and Equipment</div>
          </div>

        </div>
      </div>
      <div class="row">
        <div class="col-sm-7 col-sm-offset-2 col-md-7 col-md-offset-1" id="service-description">
          <p><font face="Arial">Pavement Maintenance Contractors,
            Inc. will design, layout and paint new parking stripes,
            traffic lines, numbers, ADA Handicap symbols and other
            specialized markings on blacktop and concrete pavement
            surfaces. Removal of unwanted pavement markings, high
            reflective line painting with glass beads and special
            coloring of areas is also available. Striping layouts meet
            the requirements of the American's with Disabilities Act
            (ADA). Metal or plastic signs of all types and sizes are
            available as well as concrete, rubber or plastic parking lot
            car stops, speed bumps, guard rails, bollards, light
            standards, and other parking lot structures’ installation
            and maintenance is available. Your experienced PMCI
            representative will assist you to develop a sign that will
            meet your needs and comply with zoning
            specifications.</font> </p>
        </div>
      </div>
    </Layout>
  )
}
