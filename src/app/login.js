import React from "react"
import { navigate } from "gatsby"
import SEO from "../components/SEO"
import {
  IdentityModal,
  //  useIdentityContext,
} from "react-netlify-identity-widget"
import "react-netlify-identity-widget/styles.css" // delete if you want to bring your own CSS

function Login() {
  // const identity = useIdentityContext()
  const [dialog, setDialog] = React.useState(false)

  const siteTitle = "Login"

  return (
    <>
      <SEO title={siteTitle} />
      <h1>Log in</h1>
      <button className="btn" onClick={() => setDialog(true)}>
        log in
      </button>

      <IdentityModal
        showDialog={dialog}
        onCloseDialog={() => setDialog(false)}
        onLogin={user => navigate("/app/profile")}
        onSignup={user => navigate("/app/profile")}
      />
    </>
  )
}

export default Login
