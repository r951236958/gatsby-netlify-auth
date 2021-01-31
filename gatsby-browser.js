import "./src/styles/global.scss"
import "./src/styles/index.css"
import "./src/styles/code.css"
import "prismjs/themes/prism-okaidia.css"
import React from "react"
import { IdentityContextProvider } from "react-netlify-identity"

export const wrapPageElement = ({ element }) => {
  const url = process.env.GATSBY_NETLIFY_IDENTITY_URL

  return <IdentityContextProvider url={url}>{element}</IdentityContextProvider>
}
