import React from "react"
import Layout from "../components/layout"

import acrylic from "../static/img/acrylic-color-coatings.jpg"
import crackRepair from "../static/img/crack-repair-2.jpg"
import equipmentInstallation from "../static/img/equipment-installation.jpg"
import unicourt from "../static/img/unicourt.jpg"
import patching from "../static/img/patching.jpg"
import pavementConsultation from "../static/img/pavement-consultation.jpg"
import playingLines from "../static/img/playing-lines.jpg"
import specialtyCoatings from "../static/img/specialty-coatings.jpg"


export default function RecreationalCourtServices() {
  return (
    <Layout>
      <div class="row service">
        <div class="pmci-favicon">
          <h2>Recreational Court Services</h2>
        </div>

        <div class="row service">
          <div class="col-sm-2 col-md-2 col-md-offset-1 category-img">
            <a href="acrylic/index.html">
              <img src={acrylic} />
            </a>
          </div>
          <div class="col-sm-3 col-md-2 category-teaser">
            <h3><a href="acrylic/index.html">Acrylic Color Coatings</a></h3>
            <div class="teaser">Installation of outdoor and indoor color coat systems in a wide variety of colors to new or existing recreational courts.
            </div>
          </div>

          <div class="col-sm-2 col-md-2 col-md-offset-1 category-img">
            <a href="patching/index.html">
              <img src={patching}/>
            </a>
          </div>
          <div class="col-sm-3 col-md-2 category-teaser">
            <h3><a href="patching/index.html">Patching</a></h3>
            <div class="teaser">Repair of damaged or sunken areas of recreational courts</div>
          </div>
        </div>

        <div class="row service">
          <div class="col-sm-2 col-md-2 col-md-offset-1 category-img">
            <a href="">
              <h3>Playing Lines</h3>
              <img src={playingLines} alt="playing lines" />
            </a>
            <p>
              Layout and installation of regulation playing lines for all sports
            </p>
          </div>
          <div class="col-sm-3 col-md-2 category-teaser">
            <h3><a href="playing-lines/index.html">Playing Lines</a></h3>
            <div class="teaser">Layout and installation of regulation playing lines for all sports</div>
          </div>

          <div class="col-sm-2 col-md-2 col-md-offset-1 category-img">
            <a href="crack-repair-2/index.html">
              <img src={crackRepair} />
            </a>
          </div>
          <div class="col-sm-3 col-md-2 category-teaser">
            <h3><a href="crack-repair-2/index.html">Crack Repair</a></h3>
            <div class="teaser">Repair of cracks using the most up to date methods and materials</div>
          </div>
        </div>

        <div class="row service">
          <div class="col-sm-2 col-md-2 col-md-offset-1 category-img">
            <a href="equipment-installation/index.html">
              <img src={equipmentInstallation} />
            </a>
          </div>
          <div class="col-sm-3 col-md-2 category-teaser">
            <h3><a href="equipment-installation/index.html">Equipment Installation</a></h3>
            <div class="teaser">Furnishing and installation of equipment for all recreational courts</div>
          </div>

          <div class="col-sm-2 col-md-2 col-md-offset-1 category-img">
            <a href="specialty-coatings/index.html">
              <img src={specialtyCoatings} />
            </a>
          </div>
          <div class="col-sm-3 col-md-2 category-teaser">
            <h3><a href="specialty-coatings/index.html">Specialty Coatings</a></h3>
            <div class="teaser">Specialty coatings that include cushioned, street hockey and inline skating surfaces.</div>
          </div>
        </div>

        <div class="row service">
          <div class="col-sm-2 col-md-2 col-md-offset-1 category-img">
            <a href="pavement-consultation-2/index.html">
              <img src={pavementConsultation} />
            </a>
          </div>
          <div class="col-sm-3 col-md-2 category-teaser">
            <h3><a href="pavement-consultation-2/index.html">Pavement Consultation</a></h3>
            <div class="teaser">Design and implement refurbishing of existing courts or building of new courts.</div>
          </div>

          <div class="col-sm-2 col-md-2 col-md-offset-1 category-img">
            <a href="unicourt/index.html">
              <img src={unicourt} />
            </a>
          </div>
          <div class="col-sm-3 col-md-2 category-teaser">
            <h3><a href="unicourt/index.html">UniCourt</a></h3>
            <div class="teaser">One Court For All Sports Great Backyard Family Fun Custom design for your favorite sports. Many different court sizes, configurations &amp; colors to choose from.</div>
          </div>
        </div>

      </div>

      <div id="footer">
        <div class="row">
          <div class="inner">
            <span class="phone"><a href="tel:16108376703"><span class="city">Lehigh Valley</span> <i class="fa fa-phone"></i> 610-837-6703</a></span>
            <span class="phone"><a href="tel:15704215532"><span class="city">Poconos</span> <i class="fa fa-phone"></i> 570-421-5532</a></span>
          </div>
        </div>
        <div class="row">
          <div class="outer">
            Copyright &#169; 1978-2020 Pavement Maintenance Contractors Inc.
            <span class="developed-by"><a href="http://nillab.com/" target="_blank" title="Developed by Nillab">Developed by nillab</a></span>
          </div>
        </div>
      </div>


      <div class="col-sm-3 col-md-2 category-teaser">
        <h3>
          <a href=""></a>
        </h3>
        <div class="teaser"></div>
      </div>


    </Layout>
  )
}
