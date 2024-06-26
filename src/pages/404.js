import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default function NotFoundPage() {
  return (
    <Layout>
      <div className="container mx-auto w-2/5 m-[25px] px-[23px] py-[15px]">
        <div className="text-3xl text-green-700 font-bold pb-4">
          Page not found
        </div>
        <div className="pb-2">
          Oops the page you have been looking for has been removed or relocated.
        </div>
        <div className="pb-2">
          <Link to="/" className="text-sky-600 hover:text-green-400">
            Go Back
          </Link>
        </div>
      </div>
    </Layout>
  )
}
