import { withIronSessionSsr } from "iron-session/next"
// import { InferGetServerSidePropsType } from "next"
import React from "react"
import Dashboard from "../components/Dashboard/Dashboard"
// import Producttable from "../components/Producttable"
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

function Index() {
  // return <Producttable />
  return <p>Home</p>
}

export default function Home() {
  return <Dashboard component={<Index />} />
}
