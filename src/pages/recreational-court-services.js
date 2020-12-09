import React from "react"
import Layout from "../components/layout"

import acc from "../static/img/acrylic-color-coatings.jpg"
import pl from "../static/img/playing-lines.jpg"

export default function Home() {
  return (
    <Layout>
      <div class="row service">
        <h2>Recreational Court Services</h2>
        <div class="pmci-favicon"></div>
        <div class="row service">
          <div class="col-sm-3 col-md-3 col-md-offset-1 category-img">
            <a href="">
              <h3>Acrylic Color Coatings</h3>
              <img src={acc} alt="acrylic-color-coatings" />
            </a>
            <p>
              Installation of outdoor and indoor color coat systems in a wide
              variety of colors to new or existing recreational courts.
            </p>
          </div>

          <div class="col-sm-3 col-md-3 col-md-offset-1 category-img">
            <a href="">
              <h3>Playing Lines</h3>
              <img src={pl} alt="playing lines" />
            </a>
            <p>
              Layout and installation of regulation playing lines for all sports
            </p>
          </div>

          <div class="col-sm-3 col-md-2 category-teaser">
            <h3>
              <a href=""></a>
            </h3>
            <div class="teaser"></div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
