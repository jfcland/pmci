import React from "react"
import { navigate } from "gatsby-link"

import Layout from "../components/layout"

export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    const contactForm = event.target
    const formData = new FormData(contactForm)
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => navigate(contactForm.getAttribute("action")))
      .catch(error => alert(error))
  }

  render() {
    return (
      <Layout>
        <div className="container mx-auto w-2/5 m-[25px] px-[23px] py-[15px]">
          <div className="text-3xl text-center text-green-700 font-bold pb-4">
            Send us an email
          </div>

          <div className="w-full md:w-96 md:max-w-full mx-auto">
            <div className="p-6 border border-gray-300 bg-gray-50 sm:rounded-md">
              <form
                name="contact"
                method="POST"
                action="/success/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact" />
                <label className="block mb-6">
                  <span className="text-gray-700">Your name</span>
                  <input
                    type="text"
                    name="name"
                    className="form-input block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                    placeholder=""
                    onChange={this.handleChange}
                  />
                </label>
                <label className="block mb-6">
                  <span className="text-gray-700">Email address</span>
                  <input
                    name="email"
                    type="email"
                    className="form-input block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                    placeholder=""
                    onChange={this.handleChange}
                    required
                  />
                </label>
                <label className="block mb-6">
                  <span className="text-gray-700">Message</span>
                  <textarea
                    name="message"
                    className="form-textarea block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                    rows="6"
                    placeholder=""
                  ></textarea>
                </label>
                <div className="mb-2">
                  <button
                    type="submit"
                    className="h-10 px-5 text-green-100 bg-green-700 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-green-800"
                  >
                    Contact Us
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
