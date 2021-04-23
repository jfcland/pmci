import React from 'react'

import Layout from '../components/layout'

export default function SuccessPage() {
  return (
    <Layout>
      <h1>
        <FormattedHTMLMessage id="success" />
      </h1>
    </Layout>
  )
}
