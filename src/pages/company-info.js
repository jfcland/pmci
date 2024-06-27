import React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

export default function Contact() {
  return (
    <Layout>
      <div className="container mx-auto md:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-15 sm:bg-gray-50 sm:my-5 px-2 pb-5 sm:px-[23px] sm:py-[15px]">
        <div className="pt-4 sm:pt-0">
          <div>
            <div className="text-xl lg:text-3xl text-green-700 font-bold pb-4">
              Company Info
            </div>
            <div className="grid gap-y-4 text-green-900 pb-5 sm:pb-0">
              <div className="font-bold">
                Pavement Maintenance Contractors Inc.
                <br />
                1039 Trexlertown Road
                <br />
                PO Box 1039
                <br />
                Trexlertown, PA 18087
                <br />
              </div>
              <div>
                <span className="font-bold">Lehigh Valley: </span>
                <a
                  href="tel:16108376703"
                  className="text-sky-500 hover:text-sky-700"
                >
                  610-837-6703
                </a>
                <br />
                <span className="font-bold">Poconos: </span>
                <a
                  href="tel:15704215532"
                  className="text-sky-500 hover:text-sky-700"
                >
                  570-421-5532
                </a>
              </div>
              <div>
                <span className="font-bold">President: </span>
                <span className="text-gray-800">Joe Ciccone</span>
                <br />
                <span className="font-bold">Phone: </span>
                <a
                  href="tel:16108376703"
                  className="text-sky-500 hover:text-sky-700"
                >
                  610-837-6703
                </a>{" "}
                <span className="text-gray-800">EXT. 301</span>
                <br />
                <span className="font-bold">Email: </span>
                <a
                  href="mailto:jciccone:jciccone@pavementcontractors.com"
                  className="text-sky-500 hover:text-sky-700"
                >
                  jciccone@pavementcontractors.com
                </a>
              </div>
              <div>
                <span className="font-bold">Project Manager: </span>
                <span className="text-gray-800">Ron Brand</span>
                <br />
                <span className="font-bold">Phone: </span>
                <a
                  href="tel:16108376703"
                  className="text-sky-500 hover:text-sky-700"
                >
                  610-837-6703
                </a>{" "}
                <span className="text-gray-800">EXT. 305</span>
                <br />
                <span className="font-bold">Cell: </span>
                <a
                  href="tel:14842399006"
                  className="text-sky-500 hover:text-sky-700"
                >
                  484-239-9006
                </a>
                <br />
                <span className="font-bold">Email: </span>
                <a
                  href="mailto:rbrand@pavementcontractors.com"
                  className="text-sky-500 hover:text-sky-700"
                >
                  rbrand@pavementcontractors.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="my-10 sm:my-0">
            <div className="text-xl lg:text-3xl text-green-700 font-bold pb-4">
              Primary Service Area
            </div>
            <StaticImage
              src="../static/img/pmci_service_area.jpg"
              alt="Primary Service Area"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}
