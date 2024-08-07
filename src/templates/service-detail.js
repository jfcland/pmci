import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

const serviceDetail = props => {
  const { pageContext } = props
  const {
    name,
    description,
    img_detail_1,
    caption_1,
    img_detail_2,
    caption_2,
  } = pageContext.edge.node
  const img_1 = getImage(img_detail_1)
  const img_2 = getImage(img_detail_2)
  var description_html = ""
  description.split(/\n+/).map(function (e) {
    description_html = description_html + "<p>" + e + "</p>"
    return e
  })
  return (
    <Layout>
      <div className="container mx-auto md:w-2/5 grid sm:bg-gray-50 sm:my-5 px-2 pb-5 sm:px-[23px] sm:py-[15px]">
        <div className="pb-5 text-center text-3xl text-green-700 font-bold pt-4 sm:pt-0">
          {name}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <div>
            <GatsbyImage image={img_1} alt={name} />
            <div className="mt-2 pl-3 pr-8 text-green-600 font-medium italic">
              {caption_1}
            </div>
          </div>
          <div>
            <GatsbyImage image={img_2} alt={name} />
            <div className="mt-2 ml-3 pr-8 text-green-600 font-medium italic">
              {caption_2}
            </div>
          </div>
        </div>
        <div
          className="my-3 mr-10 text-gray-500 grid gap-4"
          dangerouslySetInnerHTML={{ __html: description_html }}
        ></div>
      </div>
    </Layout>
  )
}

export default serviceDetail
