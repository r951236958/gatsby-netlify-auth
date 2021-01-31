import React from "react"
// import { Link } from "gatsby"

import InfiniteImages from "../components/InfiniteImages"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const Gallery = params => {
  const siteTitle = "Photo Gallery"

  return (
    <Layout>
      <SEO title={siteTitle} />
      <h1 className="is-size-3">Images from Unsplash...</h1>
      <p style={{ marginBottom: "5%" }}>
        Now this is the Law of the Jungle, as old and true as the sky, for as
        long as you keep scrolling, you shall find more doggo images{" "}
        <span role="img" aria-label="dogs-2">
          🐶 🐕
        </span>
        .
      </p>
      <InfiniteImages />
    </Layout>
  )
}

export default Gallery
