import React from "react"

import Layout from "../components/layout"

export default function Email() {
  return (
    <Layout>
      <div class="row">
        <div class="col-sm-1 col-md-1"></div>
        <div class="col-sm-4 col-md-4">
          <div id="center-wide">
            <div class="article_wrapper">
              <h1>Contact Us</h1>

              <form name="contact" method="POST" data-netlify="true">
                <div class="form-group">
                  <label>Your Name:</label>
                  <input type="text" class="form-control" name="name" />
                </div>

                <div class="form-group">
                  <label>Your Email: </label>
                  <input type="email" class="form-control" name="email" />
                </div>

                <div class="form-group">
                  <label>Message: </label>
                  <textarea name="message" class="form-control" rows="6"></textarea>
                </div>

                <button type="submit" class="btn btn-default">Send</button>
              </form>

            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
