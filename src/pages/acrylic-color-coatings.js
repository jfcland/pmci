import React from 'react'

import Layout from '../components/layout'

import img1 from "../static/img/secondary/acrylic-color-coatings_01.jpg"
import img2 from "../static/img/secondary/acrylic-color-coatings_02.jpg"


export default function SuccessPage() {
  return (
    <Layout>
      <div class="row">
        <div class="col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-1" id="service-name">
          <h1>Acrylic Color Coatings</h1>
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
          <p><font face="Arial">Pavement Maintenance Contractors, Inc.
            has over 35 years of experience applying recreational coatings and uses
            the most up to date materials and processes. PMCI furnishes and applies
            leading industry acrylic color coat systems that provide the correct
            playing surface, look great, and seal your court to extend its lifetime.
            PMCI uses the brightest, color-fast materials in an extensive variety
            of colors and finishes. Careful consideration of existing conditions and
            desired results determine the number of coats and type of material to
            be used. A specialized grade of rounded sand may be used to create a
            textured surface that is regulated to produce a slow-medium-fast pace
            finished surface. Other surface systems include rubberized cushion
            systems and hockey or in-line skate systems with specialized hardeners
            for toughness. Your experienced PMCI representative will assist you to
            determine the correct color coat system that will provide many years of
            beauty, performance, and protection.</font>
          </p>
        </div>
      </div>
    </Layout>
  )
}
