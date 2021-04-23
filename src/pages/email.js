import React from "react"

import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <div class="col-sm-5 col-md-5">
        <div id="center-wide">
          <div class="article_wrapper">
            <h1>Contact Us</h1>

            <form name="contact" method="POST" data-netlify="true">
              <p>
                <label>Your Name: <input type="text" name="name" /></label>
              </p>
              <p>
                <label>Your Email: <input type="email" name="email" /></label>
              </p>
              <p>
                <label>Message: <textarea name="message"></textarea></label>
              </p>
              <p>
                <button type="submit">Send</button>
              </p>
            </form>

          </div>
        </div>
      </div>
    </Layout>
  )
}
