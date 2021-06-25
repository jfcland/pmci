import React from "react"
import Layout from "../components/layout"

import service_area from "../static/img/pmci_service_area.jpg"

export default function Contact() {
  return (
    <Layout>
      <br />
      <div class="row">
        <div class="col-sm-1 col-md-1"></div>
        <div class="col-sm-5 col-md-5">
          <h2>Company Info</h2>

          <br />

          <p>
            <strong>
              Pavement Maintenance Contractors Inc.
              <br />
              1039 Trexlertown Road
              <br />
              PO Box 1039
              <br />
              Trexlertown, PA 18087
              <br />
            </strong>
          </p>
          <p>
            <strong>Lehigh Valley:</strong>{" "}
            <a href="tel:16108376703">610-837-6703</a>
            <br />
            <strong>Poconos:</strong> <a href="tel:15704215532">570-421-5532</a>
            <br />
            <strong>Fax:</strong> 610-837-8554
            <br />
          </p>
          <p>
            <strong>President:</strong> Joe Ciccone
            <br />
            <strong>Phone:</strong>{" "}
            <a href="tel:16108376703">610-837-6703 EXT. 301</a>
            <br />
            <strong>Email:</strong>{" "}
            <a href="mailto:jciccone:jciccone@pavementcontractors.com">
              jciccone@pavementcontractors.com
            </a>
            <br />
          </p>
          <p>
            <strong>Project Manager:</strong> Patrick Gargone
            <br />
            <strong>Phone:</strong>{" "}
            <a href="tel:16108376703">610-837-6703 EXT. 305</a>
            <br />
            <strong>Facsimile:</strong> <a href="tel:14842399005">610-837-8554</a>
            <br />
            <strong>Cell:</strong> <a href="tel:14842399005">484-239-9005</a>
            <br />
            <strong>Email:</strong>{" "}
            <a href="mailto:pgargone@pavementcontractors.com">
              pgargone@pavementcontractors.com
            </a>
            <br />
          </p>
          <p>
            <a href="/">
              <strong>PAVEMENTCONTRACTORS.COM</strong>
            </a>
          </p>
        </div>
        <div class="col-sm-6 col-md-6 right">
          <h2>Primary Service Area</h2>
          <br />
          <img src={service_area} />
        </div>
      </div>
    </Layout>
  )
}
