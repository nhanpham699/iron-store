import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider } from "@mui/material/styles"
import App from "next/app"
import { AppProps } from "next/dist/shared/lib/router/router"
import React from "react"
// import { PersistGate } from "redux-persist/integration/react"
import HeadPage from "../components/Head"
import { theme } from "../components/MuiTheme"
import { wrapper } from "../redux/store"
import "../styles/main.css"

/**
 * @see https://github.com/mui-org/material-ui/blob/master/examples/nextjs-with-typescript/pages/_app.tsx
 */

class MyApp extends App<AppProps> {
  componentDidMount() {
    // Remove the server-side injected CSS.

    const jssStyles = document.querySelector("#jss-server-side")
    jssStyles?.parentNode?.removeChild(jssStyles)
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <HeadPage />
        <Component {...pageProps} />
        {/* </PersistGate> */}
      </ThemeProvider>
    )
  }
}

export default wrapper.withRedux(MyApp)
