import DashboardIcon from "@mui/icons-material/Dashboard"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import { createStyles, makeStyles } from "@mui/styles"
import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"

const useStyles = makeStyles(() =>
  createStyles({
    active: {
      background: "#e6ffe6",
    },
  })
)

const MainListItems = () => {
  const classes = useStyles()
  const router = useRouter()
  return (
    <div>
      <Link href="/">
        <ListItem
          className={router.pathname === "/" ? classes.active : ""}
          button
        >
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Quản lý bán hàng" />
        </ListItem>
      </Link>
      <Link href="#">
        <ListItem
          className={router.pathname === "/statistics" ? classes.active : ""}
          button
        >
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Thống kê doanh thu" />
        </ListItem>
      </Link>
    </div>
  )
}

export default MainListItems

// export const secondaryListItems = (
//   <div>
//     <ListSubheader inset>Saved reports</ListSubheader>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Current month" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Last quarter" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Year-end sale" />
//     </ListItem>
//   </div>
// )
