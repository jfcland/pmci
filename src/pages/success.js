import React from 'react'

import Layout from '../components/layout'

export default function SuccessPage() {
  return (
    <Layout>
      <div class="m-1">
      <div class="row">
        <div class="col-sm-1 col-md-1"></div>
        <div class="col-sm-5 col-md-5">
          <h1>Thank you for contacting us.</h1>
          <div id="success">
            A response will be sent to the email address you’ve indicated within 48 hours. If it’s urgent, we encourage you to give us a call. Have a wonderful day!
          </div>
        </div>
      </div>
      </div>
    </Layout>
  )
}
