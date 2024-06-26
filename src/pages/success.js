import React from "react"

import Layout from "../components/layout"

export default function SuccessPage() {
  return (
    <Layout>
      <div className="container mx-auto w-2/5 m-[25px] px-[23px] py-[15px]">
        <div className="text-3xl text-green-700 font-bold pb-4">
          Thank you for contacting us.
        </div>
        <div className="pb-2">
          A response will be sent to the email address you’ve indicated within
          48 hours.
        </div>
        <div className="pb-2">
          If it’s urgent, we encourage you to give us a call.
        </div>
        <div>Have a wonderful day!</div>
      </div>
    </Layout>
  )
}
