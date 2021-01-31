import React from "react"
//import { Link } from "gatsby"

import Container from "../components/Container"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const tableItems = [
  {
    Prefix: "imp→",
    Method: "import moduleName from 'module'",
  },
  {
    Prefix: "imn→",
    Method: "import 'module'",
  },
  {
    Prefix: "exp→",
    Method: "export default moduleName",
  },
  {
    Prefix: "enf→",
    Method: "export const functionName = (params) => { }",
  },
  {
    Prefix: "edf→",
    Method: "export default (params) => { }",
  },
  {
    Prefix: "nfn→",
    Method: "const functionName = (params) => { }",
  },
  {
    Prefix: "imr→",
    Method: "import React from 'react'",
  },
  {
    Prefix: "impt→",
    Method: "import PropTypes from 'prop-types'",
  },
  {
    Prefix: "imrs→",
    Method: "import React, { useState } from 'react'",
  },
  {
    Prefix: "imrse→",
    Method: "import React, { useState, useEffect } from 'react'",
  },
]
export default function HotKey() {
  const siteTitle = "快捷輸入"

  return (
    <Layout>
      <SEO title={siteTitle} />
      <Container>
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Prefix
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Method
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {tableItems.map(items => (
                      <tr>
                        <td
                          className="px-6 py-4 whitespace-nowrap text-md text-gray-500 text-right"
                          aria-label={items.key}
                        >
                          {items.Prefix}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-md text-gray-500">
                          {items.Method}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  )
}
