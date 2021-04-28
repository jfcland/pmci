import React from 'react'

import Layout from '../components/layout'

import img1 from "../static/img/secondary/blacktop-repairs_01.jpg"
import img2 from "../static/img/secondary/blacktop-repairs_02.jpg"


export default function SuccessPage() {
  return (
    <Layout>
      <div class="row">
        <div class="col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-1" id="service-name">
          <h1>Blacktop Repairs</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-1">

          <div class="service-photo">
            <div><img src={img1}/></div>
            <div class="caption">PMCI Blacktop Repair Example - Before</div>
          </div>

          <div class="service-photo">
            <div><img src={img2}/></div>
            <div class="caption">PMCI Blacktop Repair Example - After</div>
          </div>

        </div>
      </div>
      <div class="row">
        <div class="col-sm-7 col-sm-offset-2 col-md-7 col-md-offset-1" id="service-description">
          <p><font face="Arial">Pavement Maintenance Contractors,
            Inc. repairs pot-holes, sunken, disintegrated, cracked and
            damaged blacktop. Repairs may be made by saw cutting or
            milling perimeters and then removal and replacement of
            blacktop that is properly compacted. Vertical edges and
            surfaces should be cleaned and then tack coat applied to
            assure bonding of new blacktop to existing
            blacktop. Excavation of existing stone base or sub-base and
            then rebuilding of stone base may be necessary. PMCI also
            has the experience to analyze and correct water drainage
            problems and repair catch basins, water inlets, and drainage
            pipes. Other cleaning, filling and blacktop overlay methods
            of pavement rehabilitation and pavement maintenance are also
            available for your parking lot. Your experienced PMCI
            representative will assist you in developing a plan that
            will meet your needs and budget.</font> </p>
        </div>
      </div>
    </Layout>
  )
}
