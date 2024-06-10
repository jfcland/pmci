import React from 'react'

import Layout from '../components/layout'

import patching1 from "../static/img/secondary/patching_01.jpg"
import patching2 from "../static/img/secondary/patching_02.jpg"


export default function SuccessPage() {
  return (
    <Layout>
      <div class="row">
        <div class="col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-1" id="service-name">
          <h1>Patching</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-1">

          <div class="service-photo">
            <div><img src={patching1} alt="Birdbaths patched with Acrylic Leveling Compound"/></div>
            <div class="caption">&quot;Bird Baths&quot; patched with Acrylic Leveling Compound</div>
            </div>

            <div class="service-photo">
              <div><img src={patching2} alt="Large Acrylic Patch"/></div>
              <div class="caption">Large Acrylic Patch</div>
            </div>

          </div>
        </div>
        <div class="row">
          <div class="col-sm-7 col-sm-offset-2 col-md-7 col-md-offset-1" id="service-description">
            <p>Pavement Maintenance Contractors, Inc. reduces the
              amount of water left on tennis courts and other recreational courts by
              repairing puddles and birdbaths. Specialized acrylic patch, filling and
              leveling materials minimize further damage to courts and allows for
              faster access to courts after they become wet. The size, shape, and
              depth of puddles determine the applicability of patch repairs. Other
              factors that influence water retention may relate to slope, age or
              original design of courts. Damaged blacktop may need to be removed and
              replaced with new blacktop properly compacted.  Your experienced PMCI
              representative will carefully evaluate your court’s condition and
              recommend a solution appropriate to your needs.</p>
          </div>
        </div>
    </Layout>
  )
}
