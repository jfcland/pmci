import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

const category = props => {
  const { pageContext } = props
  const { name, services } = pageContext.edge
  console.log(services)
  return (
    <Layout>
      <div className="container mx-auto w-3/5 bg-gray-50 m-[25px] px-[23px] py-[15px]">
        <div className="pb-5 text-center text-3xl text-green-700 font-bold">
          {name}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {services.map(service => {
            const img = getImage(service.node.img_list)
            return (
              <Link to={service.node.path} className="mb-10 mr-5 text-sky-600 hover:bg-gray-200 hover:text-green-400">
                <div key={service.node.id} className="pr-5">
                  <div className="float-left mr-5">
                    <GatsbyImage image={img} />
                  </div>
                  <div className="ml-5 mr-10">
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
        </div>
      </div>
    </Layout>
  )
}

export default category
