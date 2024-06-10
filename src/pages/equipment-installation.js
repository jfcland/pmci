import React from 'react'

import Layout from '../components/layout'

import img1 from "../static/img/secondary/equipment-installation_01.jpg"
import img2 from "../static/img/secondary/equipment-installation_02.jpg"


export default function SuccessPage() {
  return (
    <Layout>
      <div class="row">
        <div class="col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-1" id="service-name">
          <h1>Equipment Installation</h1>
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
          <p><font face="Arial">Pavement
            Maintenance Contractors, Inc. installs and replaces tennis and
            basketball equipment and structures. High strength concrete that is
            correctly sized and shaped will form the foundation for tennis court net
            posts, tennis court net center tie down anchors and basketball posts
            and backboards. A wide selection of equipment is available to meet your
            needs. Your experienced PMCI representative will provide options and
            designs to meet your needs.</font>
          </p>
        </div>
      </div>
    </Layout>
  )
}
