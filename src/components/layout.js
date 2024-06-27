import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

function isActive({ isCurrent }) {
  return isCurrent ? { className: "mx-6 text-yellow-400" } : null
}

export default function Layout({ children }) {
  return (
    <div className="flex flex-col h-screen">
      <header className="h-30">
        <div className="bg-green-900 pt-5">
          <a href="/" className="flex justify-center">
            <StaticImage
              src="../static/img/pmci-logo.jpg"
              alt="Pavement Maintenance Contractors"
              className="mx-auto"
            />
          </a>
          <div className="text-center text-xl text-white pb-[15px]">
            46 Years of Professional Service
          </div>
        </div>
        <div className="border-b-2 shadow-md border-gray-100">
          <nav className="flex justify-center bg-emerald-600 text-2xl font-semibold text-green-100">
            <div className="flex flex-col md:flex-row justify-center md:space-y-0 my-4 space-y-4 text-center uppercase">
              <Link
                to="/parking-lot-services/"
                getProps={isActive}
                className="mx-6 hover:text-yellow-200"
              >
                parking lots
              </Link>
              <Link
                to="/recreational-court-services/"
                getProps={isActive}
                className="mx-6 hover:text-yellow-200"
              >
                recreational courts
              </Link>
              <Link
                to="/company-info/"
                getProps={isActive}
                className="mx-6 hover:text-yellow-200"
              >
                company info
              </Link>
              <Link
                to="/email/"
                getProps={isActive}
                className="mx-6 hover:text-yellow-200"
              >
                email
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <main className="mb-auto">
        {children}
      </main>

      <footer className="h-100">
        <div className="text-center bg-gray-800 py-5 text-xl text-gray-300">
          <div className="grid container mx-auto  md:w-3/5  grid-cols-1 md:grid-cols-2">
            <div className="pb-2 sm:pb-0 sm:pr-20">
              <a href="tel:16108376703" className="hover:text-sky-300">
                <span className="pr-2">Lehigh Valley</span>
                <i className="fa fa-phone"></i> 610-837-6703
              </a>
            </div>
            <div className="">
              <a href="tel:15704215532" className="hover:text-sky-300">
                <span className="pr-2">Poconos</span>
                <i className="fa fa-phone"></i> 570-421-5532
              </a>
            </div>
          </div>
        </div>

        <div className="text-center bg-gray-700 py-5 text-lg">
          <div className="text-gray-300">
            Pavement Maintenance Contractors Inc.
          </div>
          <div className="text-gray-500">Copyright &#169; 1978-2024</div>
          <div>
            <a
              href="http://nillab.com/"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-indigo-400 hover:text-indigo-500"
            >
              Developed by nillab
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
