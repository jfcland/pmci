import React from 'react'

import Layout from '../components/layout'

import img1 from "../static/img/secondary/crack-repair_01.jpg"
import img2 from "../static/img/secondary/crack-repair_02.jpg"


export default function SuccessPage() {
  return (
    <Layout>
      <div class="m-1">
      <div class="row">
        <div class="col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-1" id="service-name">
          <h1>Crack Repair</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-1">

          <div class="service-photo">
            <div><img src={img1} alt="Court Before Crack Repair"/></div>
            <div class="caption">Court Before Crack Repair</div>
          </div>

          <div class="service-photo">
            <div><img src={img2} alt="Court After Crack Repair"/></div>
            <div class="caption">Court After Crack Repair</div>
          </div>

        </div>
      </div>
      <div class="row">
        <div class="col-sm-7 col-sm-offset-2 col-md-7 col-md-offset-1" id="service-description">
          <p><font face="Arial">Pavement Maintenance Contractors,
            Inc. repairs cracks in tennis courts and other
            recreational surfaces. Cracks become common as courts age
            and may become unsightly, contribute to further
            deterioration, inhibit play, or become a safety
            hazard. Although no crack repair system is permanent, PMCI
            uses methods that may eliminate the appearance of the
            repaired crack for up to 8 years. The type, cause, and
            quantity of cracks, along with the expected duration of
            the repairs determine the appropriate method of
            repair. Options may include, but are not limited to; (1)
            acrylic patching of cracks (2) Armor, Do Right or Guardian
            fabric repair systems or (3) patching of cracks with new
            blacktop. Your experienced PMCI representative will
            thoroughly evaluate your court’s condition and recommend
            options that will meet your needs.</font>
          </p>
        </div>
      </div>
      </div>
    </Layout>
  )
}
