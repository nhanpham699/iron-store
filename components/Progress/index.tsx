import { Box, CircularProgress } from "@mui/material"
// import { createStyles, makeStyles } from "@material-ui/core/styles"
import React from "react"

// const useStyles = makeStyles(() =>
//   createStyles({
//     progress: {
//       color: "#e73b40",
//       // background: "green",
//     },
//   })
// )

interface IProps {
  position: any
}

export default function Progress(props: IProps) {
  // const classes = useStyles()
  return (
    <Box
      height="100%"
      width="100%"
      left={0}
      top={0}
      zIndex={1000}
      overflow="hidden"
      position={props.position}
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgcolor="rgb(0 0 0 / 16%)"
      // className={classes.progress}
    >
      <CircularProgress color="primary" />
    </Box>
  )
}
