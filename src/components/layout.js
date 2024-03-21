import React from "react"

import logo from "../static/img/pmci-logo.jpg"

export default function Layout({ children }) {
  return (
    <div>
      <div id="header">
        <div class="container">
          <a href="/">
            <img
              src={logo}
              alt="Pavement Maintenance Contractors"
              id="logo"
              border="0"
            />
          </a>
          <div id="tagline">43 Years of Professional Service</div>
        </div>
      </div>
      <nav id="main-nav" class="navbar navbar-default">
        <div class="container">
          <div>
            <ul class="nav navbar-nav">
              <li>
                <a href="/parking-lot-services/" title="Parking Lot Services">
                  Parking Lots
                </a>
              </li>
              <li>
                <a
                  href="/recreational-court-services/"
                  title="Recreational Court Services"
                >
                  Recreational Courts
                </a>
              </li>
              <li>
                <a href="/email/" title="Email">
                  Email
                </a>
              </li>
              <li>
                <a href="/contact/" title="Company Information">
                  Contact
                </a>
              </li>
              <li>
                <a href="/" title="Home">
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {children}
      <div id="footer">
        <div class="row">
          <div class="inner">
            <span class="phone">
              <a href="tel:16108376703">
                <span class="city">Lehigh Valley</span>{" "}
                <i class="fa fa-phone"></i> 610-837-6703
              </a>
            </span>
            <span class="phone">
              <a href="tel:15704215532">
                <span class="city">Poconos</span> <i class="fa fa-phone"></i>{" "}
                570-421-5532
              </a>
            </span>
          </div>
        </div>
        <div class="row">
          <div class="outer">
            Copyright &#169; 1978-2021 Pavement Maintenance Contractors Inc.
            <span class="developed-by">
              <a
                href="http://nillab.com/"
                target="_blank"
                title="Developed by Nillab"
              >
                Developed by nillab
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
