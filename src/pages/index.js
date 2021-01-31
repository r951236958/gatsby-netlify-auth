import React from "react"
import { Link } from "gatsby"
// import useIdentityContext from "netlify-identity-widget"
import Layout from "../components/Layout"
import Image from "../components/image"
import SEO from "../components/SEO"
import P from "../components/P"
import Hr from "../components/Hr"

class IndexPage extends React.Component {
  state = { loading: false, msg: null }

  handleClick = e => {
    e.preventDefault()

    this.setState({ loading: true })
    fetch("/.netlify/functions/token-hider")
      .then(response => response.json())
      .then(result => {
        console.log(result.message)
      })
      .then(json => this.setState({ loading: false, msg: json.message }))
    console.log(this)
  }

  render() {
    const { loading, msg } = this.state

    const codeExample = `
    import React from 'react';

    import { IdentityContextProvider } from 'react-netlify-identity';

    function App() {
      const url = 'https://your-identity-instance.netlify.com/'; // supply the url of your Netlify site instance. VERY IMPORTANT. no point putting in env var since this is public anyway
      return (
        <IdentityContextProvider url={url}>
          {/* rest of your app */}
        </IdentityContextProvider>
      );
    }
    `

    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div className="static">
            <p>
              Welcome to your new Gatsby + Netlify Functions + Netlify Identity
              site
            </p>
            <ul>
              <li>
                This site has statically generated marketing pages like this one
                and{" "}
                <Link
                  className="text-lg text-blue-500 font-semibold underline"
                  to="/page-2/"
                >
                  page 2.
                </Link>{" "}
              </li>
              <li>
                It also has a dynamically generated clientside app guarded by
                authentication:
                <ul>
                  <li>
                    <Link
                      className="text-lg text-blue-500 font-semibold underline"
                      to="/app/"
                    >
                      Go to App (with Netlify Identity)
                    </Link>{" "}
                  </li>
                </ul>
              </li>
              <li>
                You can{" "}
                <a
                  className="text-sm text-pink-500 font-semibold underline"
                  href="https://github.com/sw-yx/jamstack-hackathon-starter"
                >
                  view source here
                </a>
              </li>
              <li>
                or see{" "}
                <a
                  className="text-sm text-pink-500 font-semibold underline"
                  href="https://youtu.be/bueXJInQt2c"
                >
                  the Youtube walkthrough
                </a>
              </li>
              <li>
                or
                <a href="https://app.netlify.com/start/deploy?repository=https://github.com/sw-yx/jamstack-hackathon-starter&stack=cms">
                  <img
                    src="https://www.netlify.com/img/deploy/button.svg"
                    alt="Deploy to Netlify"
                  />
                </a>
              </li>
            </ul>
            <div className="max-w-4xl">
              <pre className="language-jsx">
                <code>{codeExample}</code>
              </pre>
            </div>

            <Hr />
            <P className="mt-2">
              You can still access Netlify functions even on static "marketing
              pages". This function is available at{" "}
              <a href="/.netlify/functions/token-hider">
                <code className="bg-yellow-300 bg-opacity-20 text-sm font-bold rounded-md p-1">
                  /.netlify/functions/token-hider
                </code>
              </a>{" "}
              and it uses an API_SECRET environment variable that is hidden from
              the frontend!
            </P>
            <button className="btn" onClick={this.handleClick}>
              {loading ? "Loading..." : "Call Lambda Function"}
            </button>
            <br />

            {msg ? (
              <span>{msg}</span>
            ) : (
              <pre>"Click the button and watch this!"</pre>
            )}
          </div>
          <div
            style={{
              borderLeft: "brown",
              borderLeftStyle: "dashed",
              paddingLeft: "3rem",
            }}
          >
            <p>Now go build something great.</p>
            <div style={{ maxWidth: "300px", marginBottom: "1.45rem" }}>
              <Image />
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
