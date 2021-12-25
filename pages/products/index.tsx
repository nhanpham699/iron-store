import { createTheme } from "@mui/material/styles"
import { withIronSessionSsr } from "iron-session/next"
import React from "react"
import Dashboard from "../../components/dashboard/Dashboard"
import Producttable from "../../components/Producttable"
import { sessionOptions } from "../../lib/iron-session"

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req }: any) {
    const jwt = req.session.jwt
    if (!jwt) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      }
    }
    return {
      props: { jwt },
    }
  },
  sessionOptions
)

// const myLoader = ({ src, width, quality }: any) => {
//   return `${window.location.protocol}//${
//     window.location.host
//   }/${src}?w=${width}&q=${quality || 75}`
// }

const theme = createTheme()

const Product = () => {
  return <Dashboard component={<Producttable />} />
}

// const mapStateToProps = (state: ProductState) => state.products

// const mapDispatchToProps = (dispatch: any) => ({
//   loadDataRequest: () => dispatch(loadDataRequest()),
// })

export default Product
