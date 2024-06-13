import React from "react"

import Layout from "../components/layout"

import blacktopSealing from "../static/img/blacktop-sealing.jpg"
import crackRepair from "../static/img/crack-repair.jpg"
import patchRepairs from "../static/img/patch-repairs.jpg"
import trafficMarkings from "../static/img/traffic-markings.jpg"
import constructionMan from "../static/img/construction-man.jpg"



export default function ParkingLotServices() {
  return (
    <Layout>
      <div class="m-1">
      <br />

      <div class="row service">
        <div class="pmci-favicon">
          <h2>Parking Lot Services</h2>
        </div>
      </div>

      <br />

      <div class="row service">
        <div class="col-sm-2 col-md-2 col-md-offset-1 category-img">
          <a href="/seal-coating/">
            <img src={blacktopSealing} alt=""/>
          </a>
        </div>
        <div class="col-sm-3 col-md-2 category-teaser">
          <h3><a href="/seal-coating/">Seal Coating</a></h3>
          <div class="teaser">Application of the best materials in the correct quantities with a warranty.</div>
        </div>

        <div class="col-sm-2 col-md-2 col-md-offset-1 category-img">
          <a href="/blacktop-repairs/">
            <img src={patchRepairs} alt=""/>
          </a>
        </div>
        <div class="col-sm-3 col-md-2 category-teaser">
          <h3><a href="/blacktop-repairs/">Blacktop Repairs</a></h3>
          <div class="teaser">Repair of damaged blacktop with new blacktop and specialized materials.</div>
        </div>
      </div>

      <div class="row service">
        <div class="col-sm-2 col-md-2 col-md-offset-1 category-img">
          <a href="/crack-repair/">
            <img src={crackRepair} alt=""/>
          </a>
        </div>
        <div class="col-sm-3 col-md-2 category-teaser">
          <h3><a href="/crack-repair/">Crack Repair</a></h3>
          <div class="teaser">Repair of cracks using the best materials and methods available</div>
        </div>

        <div class="col-sm-2 col-md-2 col-md-offset-1 category-img">
          <a href="/pavement-markings/">
            <img src={trafficMarkings} alt=""/>
          </a>
        </div>
        <div class="col-sm-3 col-md-2 category-teaser">
          <h3><a href="/pavement-markings/">Pavement Markings</a></h3>
          <div class="teaser">Painting or removal of parking stripes, traffic lines and symbols. Installation of signs, car stops, and guard rails.</div>
        </div>

      </div>
      <div class="row service">
        <div class="col-sm-2 col-md-2 col-md-offset-1 category-img">
          <a href="/pavement-consultation/">
            <img src={constructionMan} alt=""/>
          </a>
        </div>
        <div class="col-sm-3 col-md-2 category-teaser">
          <h3><a href="/pavement-consultation/">Pavement Consultation</a></h3>
          <div class="teaser">For new construction or existing blacktop.</div>
        </div>
      </div>
      </div>
    </Layout>
  )
}
