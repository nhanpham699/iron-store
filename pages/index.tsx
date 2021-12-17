import { Box } from "@mui/material"
import React from "react"
import Dashboard from "../components/dashboard/Dashboard"
import useStyles from "../styles"

function Index() {
  const classes = useStyles()
  return (
    <Box>
      <Dashboard />
    </Box>
  )
}

export default function Home() {
  return <Index />
}
