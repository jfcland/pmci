import React from "react"

import Layout from "../components/layout"

export default function Home() {
  return (
    <div class="col-sm-5 col-md-5">
      <div id="center-wide">
        <div class="article_wrapper">
          <h1>Contact Form</h1>
          <form method="post" action="">
            <button type="submit" class="btn btn-success">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
