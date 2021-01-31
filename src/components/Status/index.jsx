import React, { useState } from "react"
import { useIdentityContext } from "react-netlify-identity-widget"

const Status = () => {
  const [showAlert, setShowAlert] = useState(true)
  const { user, isLoggedIn } = useIdentityContext()

  return (
    <>
      {showAlert ? (
        <div className="text-white px-6 py-4 border-0 rounded relative mb-4 bg-gray-500">
          <span className="text-xl inline-block mr-5 align-middle">
            <i className="fas fa-bell" />
          </span>
          <span className="inline-block align-middle mr-8">
            {isLoggedIn
              ? `Hello, ${user.user_metadata && user.user_metadata.full_name}`
              : "You are not logged in"}
          </span>
          <button
            className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
            onClick={() => setShowAlert(false)}
          >
            <span>×</span>
          </button>
        </div>
      ) : null}
    </>
  )
}

export default Status
