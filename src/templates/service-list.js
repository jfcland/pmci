import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

const category = props => {
  const { pageContext } = props
  const { name, services } = pageContext.edge
  console.log(services)
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
              <Link to={service.node.path} className="mb-10 mr-5 text-sky-600 hover:bg-gray-200 hover:text-green-400">
                <div key={service.node.id} className="pr-5">
                  <div className="md:float-left mr-5">
                    <GatsbyImage image={img} />
                  </div>
                  <div className="md:ml-5 md:mr-10">
                    <div className="text-2xl font-medium">
                      {service.node.name}
                    </div>
                    <div className="text-gray-500">
                      {service.node.teaser}
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
          <div>
            <StaticImage
              src="../static/img/costars-logo.jpg"
              alt="Pavement Maintenance Contractors"
              width={350}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default category
