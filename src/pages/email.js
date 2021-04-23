import React from "react"

import Layout from "../components/layout"

export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigateTo(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
      <Layout>
        <div class="row">
          <div class="col-sm-1 col-md-1"></div>
          <div class="col-sm-4 col-md-4">
            <div id="center-wide">
              <div class="article_wrapper">
                <h1>Contact Us</h1>

                <form name="contact"
                      method="POST"
                      action="/success/"
                      data-netlify="true"
                      data-netlify-honeypot="name"
                      onSubmit={this.handleSubmit}
                >
                  <div class="form-group">
                    <label>Your Name:</label>
                    <input type="text" class="form-control" name="name" onChange={this.handleChange} />
                  </div>

                  <div class="form-group">
                    <label>Your Email: </label>
                    <input type="email" class="form-control" name="email" onChange={this.handleChange} />
                  </div>

                  <div class="form-group">
                    <label>Message: </label>
                    <textarea name="message" class="form-control" rows="6" onChange={this.handleChange} ></textarea>
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
}
