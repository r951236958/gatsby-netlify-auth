import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React, { useEffect } from "react"
// import Container from "../Container"
import Footer from "../Footer"
import Prism from "prismjs"

import TopBar from "../TopBar"

const Layout = ({ title, children }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  useEffect(() => {
    Prism.highlightAll()
  })

  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100">
        <TopBar
          menuLinks={data.site.siteMetadata.menuLinks}
          siteTitle={data.site.siteMetadata.title}
        />
        <div className="max-w-5xl pt-0 pb-6 px-4 my-0 mx-auto">
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
}

Layout.defaultProps = {
  title: `Gatsby + Netlify`,
}

export default Layout
