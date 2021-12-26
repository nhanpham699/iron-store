import { Typography } from "@mui/material"
import { withIronSessionSsr } from "iron-session/next"
import React from "react"
import Dashboard from "../../components/dashboard/Dashboard"
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

const Product = () => {
  return <Dashboard component={<Typography>sdas</Typography>} />
}

// const mapStateToProps = (state: ProductState) => state.products

// const mapDispatchToProps = (dispatch: any) => ({
//   loadDataRequest: () => dispatch(loadDataRequest()),
// })

export default Product
