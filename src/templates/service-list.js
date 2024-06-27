import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

const serviceList = props => {
  const { pageContext } = props
  const { name, services } = pageContext.edge
  console.log(pageContext)
  return (
    <Layout>
      <div className="container mx-auto md:w-3/5 gap-15 sm:bg-gray-50 sm:my-5 px-2 pb-5 sm:px-[23px] sm:py-[15px]">
        <div className="pb-5 text-center text-3xl text-green-700 font-bold pt-4 sm:pt-0">
          {name}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {services.map(service => {
            const img = getImage(service.node.img_list)
            return (
              <Link
                to={service.node.path}
                className="mb-10 mr-5 pb-5 text-sky-600 bg-gray-100 hover:bg-gray-200 hover:text-green-400"
              >
                <div key={service.node.id} className="pr-5">
                  <div className="md:float-left mr-5">
                    <GatsbyImage image={img} />
                  </div>
                  <div className="md:ml-5 md:mr-10">
                    <div className="text-2xl font-medium">
                      {service.node.name}
                    </div>
                    <div className="text-gray-500">{service.node.teaser}</div>
                  </div>
                </div>
              </Link>
            )
          })}
          <div className="flex justify-center items-center bg-gray-100 mb-10 mr-5 p-5">
            <StaticImage
              src="../static/img/costars-logo.jpg"
              alt="Pavement Maintenance Contractors"
              width={350}
            />
          </div>
          {pageContext.edge.path === "/parking-lot-services/" && (
            <div className="flex justify-center items-center bg-gray-100 mb-10 mr-5 p-5">
              <StaticImage
                src="../static/img/sealmaster-logo.png"
                alt="SealMaster"
                width={350}
              />
            </div>
          )}
          {pageContext.edge.path === "/recreational-court-services/" && (
            <>
              <div className="flex justify-center items-center bg-gray-100 mb-10 mr-5 p-5">
                <StaticImage
                  src="../static/img/sport-master-logo.png"
                  alt="Sport Master"
                  width={350}
                />
              </div>
              <div className="flex justify-center items-center bg-gray-100 mb-10 p-5 mr-5 grid grid-cols-2 ">
                <StaticImage
                  src="../static/img/usa-pickleball.png"
                  alt="USA Pickleball"
                  width={140}
                />
                <StaticImage
                  src="../static/img/uspta.png"
                  alt="USPTA"
                  width={140}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default serviceList
