import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import parklots from "../images/home-parkinglot-collage.png"
import homecourt from "../images/home-court-collage.png"

export default function Home() {
  return (
    <Layout>
      <div className="container mx-auto md:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-15 sm:bg-gray-50 sm:my-5 px-2 pb-5 sm:px-[23px] sm:py-[15px]">
        <div className="pt-4 sm:pt-0">
          <Link
            to="/parking-lot-services/"
            title="Parking Lot Services"
            className="text-3xl text-sky-600 font-medium hover:text-green-600"
          >
            <div className="text-right mr-5">
              <div className="">Parking Lots</div>
              <div className="text-gray-600 text-xl">
                Sealcoating, Striping, Repairs and Consultations for commercial projects of any size.
              </div>
            </div>
            <img src={parklots} alt="parking lots" className="float-right hover:sepia-[.25]" />
          </Link>
        </div>
        <div>
          <Link
            to="/recreational-court-services/"
            title="Recreational Court Services"
            className="text-3xl text-sky-600 font-medium hover:text-green-600"
          >
            <div className="text-left ml-5">
              <div className="">Recreational Courts</div>
              <div className="text-gray-600 text-xl">
                  Pickleball, Tennis, Basketball, Skateparks, Playgrounds and more.
              </div>
            </div>
            <img src={homecourt} alt="courts" className="float-left hover:sepia-[.25]" />
          </Link>
        </div>
      </div>
    </Layout>
  )
}
