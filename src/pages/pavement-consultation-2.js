import React from 'react'

import Layout from '../components/layout'

import img1 from "../static/img/secondary/pavement-consultation_01.jpg"
import img2 from "../static/img/secondary/pavement-consultation_02.jpg"
import img3 from "../static/img/secondary/pavement-consultation_03.jpg"
import img4 from "../static/img/secondary/pavement-consultation_04.jpg"


export default function SuccessPage() {
  return (
    <Layout>
      <div class="row">
        <div class="col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-1" id="service-name">
          <h1>Pavement Consulation</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-1">

          <div class="service-photo">
            <div><img src={img1}/></div>
            <div class="caption"></div>
          </div>

          <div class="service-photo">
            <div><img src={img2}/></div>
            <div class="caption"></div>
          </div>

          <div class="service-photo">
            <div><img src={img3}/></div>
            <div class="caption"></div>
          </div>

          <div class="service-photo">
            <div><img src={img4}/></div>
            <div class="caption"></div>
          </div>

        </div>
      </div>
      <div class="row">
        <div class="col-sm-7 col-sm-offset-2 col-md-7 col-md-offset-1" id="service-description">
          <p><font face="Arial">Pavement Maintenance Contractors,
            Inc. has the expertise to resurface, refurbish or
            rehabilitate recreational courts or to design and build
            new courts. Repair and refurbishing of existing courts
            require an evaluation of condition, age, original
            construction design, history and use. Various
            rehabilitation methods may exist that are directly related
            to how long repairs will last and cost. Pavement
            Maintenance Contractors continually seeks to provide for
            its’ customers the best methods and materials available
            using the guidelines of the United States Tennis Court and
            Track Builders Associations and the American Sports
            Builders Association. New design and construction takes
            into account such factors as site conditions, court
            orientation, construction specifications, coatings,
            equipment and amenities. Your experienced PMCI
            representative may assist you to develop correct
            specifications and planning for refurbishing your existing
            courts or building new courts.</font>
          </p>
        </div>
      </div>
    </Layout>
  )
}
