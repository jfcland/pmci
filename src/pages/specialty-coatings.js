import React from 'react'

import Layout from '../components/layout'

import img1 from "../static/img/secondary/specialty-coatings_01.jpg"
import img2 from "../static/img/secondary/specialty-coatings_02.jpg"


export default function SuccessPage() {
  return (
    <Layout>
      <div class="m-1">
      <div class="row">
        <div class="col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-1" id="service-name">
          <h1>Specialty Coatings</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-1">

          <div class="service-photo">
            <div><img src={img1} alt=""/></div>
            <div class="caption"></div>
          </div>

          <div class="service-photo">
            <div><img src={img2} alt=""/></div>
            <div class="caption"></div>
          </div>

        </div>
      </div>
      <div class="row">
        <div class="col-sm-7 col-sm-offset-2 col-md-7 col-md-offset-1" id="service-description">
          <p><font face="Arial">Pavement Maintenance Contractors, Inc. furnishes and
            applies a variety of specialized coatings for tennis courts, basketball
            courts, and other recreational surfaces that include; hockey, in-line
            skating, skateboard, BMX bike, athletic track repairs, and other
            specialized surfaces. “Next Generation” materials include rubber
            cushioned, polyurethane and acrylic latex fortified systems. Matching
            the function of the court to the correct color coat system assures
            performance, appearance, and longevity. Your experienced PMCI
            representative will evaluate your needs and recommend a system that will
            serve your specialized needs.</font>
          </p>
        </div>
      </div>
      </div>
    </Layout>
  )
}
