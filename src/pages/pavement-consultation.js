import React from 'react'

import Layout from '../components/layout'

import img1 from "../static/img/secondary/pavement-consultation-pl_01.jpg"
import img2 from "../static/img/secondary/pavement-consultation-pl_02.jpg"


export default function SuccessPage() {
  return (
    <Layout>
      <div class="m-1">
      <div class="row">
        <div class="col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-1" id="service-name">
          <h1>Pavement Consultation</h1>
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
          <p>
            <font face="Arial">
              Pavement Maintenance Contractors, Inc. will help you to
              plan and design a new parking lot addition or to
              rehabilitate and repair an existing parking lot. The scope
              of work may include overlay, removal and replacement or
              rebuilding of pavement surfaces and structures. Careful
              attention to details, customer needs and economy will lead
              to a successful project with lasting results.</font>
          </p>
        </div>
      </div>
      </div>
    </Layout>
  )
}
