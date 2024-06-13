import React from 'react'

import Layout from '../components/layout'

import img1 from "../static/img/secondary/crack-repair-pl_01.jpg"
import img2 from "../static/img/secondary/crack-repair-pl_02.jpg"


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
            <div><img src={img1} alt="Pavement After Crack Repair"/></div>
            <div class="caption">Pavement After Crack Repair</div>
          </div>

          <div class="service-photo">
            <div><img src={img2} alt="Pavement Before Crack Repair"/></div>
            <div class="caption">Pavement After Crack Repair and Seal Coating</div>
          </div>

        </div>
      </div>
      <div class="row">
        <div class="col-sm-7 col-sm-offset-2 col-md-7 col-md-offset-1" id="service-description">
          <p>
            <font face="Arial">Pavement Maintenance Contractors,
          Inc. repairs pavement cracks and joints by evaluating the
          type and cause of cracks. When cracks are amenable to
          repair, important preparation that includes cleaning,
          drying, and shaping (routing) of cracks or joints is
          necessary to assure proper crack or joint filling. PMCI uses
          the highest grade, hot-applied liquid rubberized
          sealant. Our equipment includes a double jacket melter with
          a heated pressurized hose and wand. Repairs last the longest
          by minimizing water infusion into the cracks and thereby
          substantially increasing the lifetime of your pavement. It
          is estimated that crack and joint filling and sealing
          performed at 3-year intervals will more than double the
          lifetime of your pavement. Effective and inexpensive, crack
          filling and joint sealing is often the first step in
          preventative care of your pavement. Your PMCI experienced
          representative will assist you to determine your pavement
          needs.</font>
          </p>
        </div>
      </div>
      </div>
    </Layout>
  )
}
