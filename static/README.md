# React on VS Code 常用快捷輸入備忘錄

稍微紀錄一下常使用的縮寫

## Basic Methods
|    Prefix   | Method                                                                              |
| ----------: | ----------------------------------------------------------------------------------- |
|      `imp→` | `import moduleName from 'module'`                                                   |
|      `imn→` | `import 'module'`                                                                   |
|      `ima→` | `import { originalName as aliasName} from 'module'`                                 |
|      `enf→` | `export const functionName = (params) => { }`                                       |
|      `edf→` | `export default (params) => { }`                                                    |
|      `nfn→` | `const functionName = (params) => { }`                                              |
|      `imr→` | `import React from 'react'`                                                         |
|<td colspan="2">React</td>|
|     `imrd→` | `import ReactDOM from 'react-dom'`                                                  |
|     `imrc→` | `import React, { Component } from 'react'`                                          |
|    `imrcp→` | `import React, { Component } from 'react' & import PropTypes from 'prop-types'`     |
|    `imrpc→` | `import React, { PureComponent } from 'react'`                                      |
|   `imrpcp→` | `import React, { PureComponent } from 'react' & import PropTypes from 'prop-types'` |
|     `imrm→` | `import React, { memo } from 'react'`                                               |
|    `imrmp→` | `import React, { memo } from 'react' & import PropTypes from 'prop-types'`          |
|     `impt→` | `import PropTypes from 'prop-types'`                                                |
|     `imrr→` | `import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom'`         |
|     `imbr→` | `import { BrowserRouter as Router} from 'react-router-dom'`                         |
|    `imbrc→` | `import { Route, Switch, NavLink, Link } from react-router-dom'`                    |
|    `imbrr→` | `import { Route } from 'react-router-dom'`                                          |
|    `imbrs→` | `import { Switch } from 'react-router-dom'`                                         |
|    `imbrl→` | `import { Link } from 'react-router-dom'`                                           |
|   `imbrnl→` | `import { NavLink } from 'react-router-dom'`                                        |
|     `imrs→` | `import React, { useState } from 'react'`                                           |
|    `imrse→` | `import React, { useState, useEffect } from 'react'`                                |
|    `redux→` | `import { connect } from 'react-redux'`                                             |
|   `rconst→` | `constructor(props) with this.state`                                                |
|    `rconc→` | `constructor(props, context) with this.state`                                       |
|      `est→` | `this.state = { }`                                                                  |
|      `cwm→` | `componentWillMount = () => { }` DEPRECATED!!!                                      |
|      `cdm→` | `componentDidMount = () => { }`                                                     |
|      `cwr→` | `componentWillReceiveProps = (nextProps) => { }` DEPRECATED!!!                      |
|      `scu→` | `shouldComponentUpdate = (nextProps, nextState) => { }`                             |
|     `cwup→` | `componentWillUpdate = (nextProps, nextState) => { }` DEPRECATED!!!                 |
|     `cdup→` | `componentDidUpdate = (prevProps, prevState) => { }`                                |
|     `cwun→` | `componentWillUnmount = () => { }`                                                  |
|    `gdsfp→` | `static getDerivedStateFromProps(nextProps, prevState) { }`                         |
|     `gsbu→` | `getSnapshotBeforeUpdate = (prevProps, prevState) => { }`                           |
|      `ren→` | `render() { return( ) }`                                                            |
|      `sst→` | `this.setState({ })`                                                                |
|      `ssf→` | `this.setState((state, props) => return { })`                                       |
|    `props→` | `this.props.propName`                                                               |
|    `state→` | `this.state.stateName`                                                              |
| `rcontext→` | `const ${1:contextName} = React.createContext()`                                    |
|     `cref→` | `this.${1:refName}Ref = React.createRef()`                                          |
|     `fref→` | `const ref = React.createRef()`                                                     |
|      `bnd→` | `this.methodName = this.methodName.bind(this)`                                      |


[官方插件儲存庫](https://github.com/dsznajder/vscode-es7-javascript-react-snippets)