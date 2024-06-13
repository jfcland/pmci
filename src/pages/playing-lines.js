import React from 'react'

import Layout from '../components/layout'

import img1 from "../static/img/secondary/playing-lines_01.jpg"
import img2 from "../static/img/secondary/playing-lines_02.jpg"


export default function SuccessPage() {
  return (
    <Layout>
      <div class="m-1">
      <div class="row">
        <div class="col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-1" id="service-name">
          <h1>Playing Lines</h1>
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
          <p><font face="Arial">Pavement Maintenance Contractors, Inc. will lay out
            and stripe playing lines for tennis, basketball, hockey, volleyball,
            pickle ball, badminton, quick start tennis, under ten tennis and other
            recreational court playing lines. Regulation lines may be applied in
            multiple coats for appearance and longevity. A primer, filler coat of
            Stripe-Rite may be applied to assure the playing lines will be crisp and
            clean. Acrylic playing line paint is made specifically for recreational
            courts and may be textured with sand to match the playing surface.
            Strict adherence to dimensions and specifications ensure that lines
            installed by PMCI will be accurate and long lasting.</font>
          </p>
        </div>
      </div>
      </div>
    </Layout>
  )
}
