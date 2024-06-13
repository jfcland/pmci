import React from 'react'

import Layout from '../components/layout'

import img1 from "../static/img/secondary/seal-coating_01.jpg"
import img2 from "../static/img/secondary/seal-coating_02.jpg"


export default function SuccessPage() {
  return (
    <Layout>
      <div class="m-1">
      <div class="row">
        <div class="col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-1" id="service-name">
          <h1>Seal Coating</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-1">

          <div class="service-photo">
            <div><img src={img1} alt=""/></div>
            <div class="caption">PMCI Seal Coating Examples</div>
          </div>

          <div class="service-photo">
            <div><img src={img2} alt=""/></div>
            <div class="caption"></div>
          </div>

        </div>
      </div>
      <div class="row">
        <div class="col-sm-7 col-sm-offset-2 col-md-7 col-md-offset-1" id="service-description">
          <p><font face="Arial">Pavement Maintenance Contractors, Inc. is an expert on properly evaluating your pavement condition and recommending a pavement coating(s) for your commercial or industrial blacktop surface that will greatly increase the lifetime of your pavement and greatly enhance the appearance of your parking lot and pavement surface. Asphalt emulsions and cold tar emulsions are mixed with sand and additives at our own tank farm and are applied to prepared surfaces in proper quantities to assure effectiveness. Application may be by brush, sprayed or squeegey. Must more than a paint job, PMCI coating(s) are a pavement maintenance system that comes with a guarantee and written warrantee that carries a minimum 5-year usable lifetime for your pavement.</font>
          </p>
        </div>
      </div>
      </div>
    </Layout>
  )
}
