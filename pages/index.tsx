import { Box, Typography } from "@mui/material"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import React from "react"
import HeadPage from "../components/Head"
import nextI18NextConfig from "../next-i18next.config.js"
import useStyles from "../styles"

export const getStaticProps = async ({ locale }: any) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"], nextI18NextConfig)),
    },
  }
}

function Home() {
  const classes = useStyles()
  return (
    <Box>
      <HeadPage />
      <Typography className={classes.title}>home page</Typography>
    </Box>
  )
}

export default Home
