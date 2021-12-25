import { Typography } from "@mui/material"
import { withIronSessionSsr } from "iron-session/next"
// import { InferGetServerSidePropsType } from "next"
import React from "react"
import Dashboard from "../components/dashboard/Dashboard"
import { sessionOptions } from "../lib/iron-session"

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

export default function Home() {
  return <Dashboard component={<Typography>Home</Typography>} />
  // return <p>Home</p>
}
