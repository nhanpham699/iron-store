import { Close, Delete, Done, Edit } from "@mui/icons-material"
import { Box, TextField, Tooltip } from "@mui/material"
import { createStyles, makeStyles } from "@mui/styles"
import dynamic from "next/dynamic"
import React from "react"

const MUIDataTable = dynamic(() => import("mui-datatables"), { ssr: false })

const useStyles = makeStyles((theme: any) =>
  createStyles({
    cursor: {
      marginRight: theme.spacing(1.5),
      marginTop: theme.spacing(0.7),
      cursor: "pointer",
    },
  })
)

export default function Producttable() {
  // const columns = ["Name", "Title", "Location", "Age", "Salary"]
  const classes = useStyles()
  const [isEdit, setEdit] = React.useState<any>({
    _id: -1,
    name: "",
  })

  const handleUpdate = (_id: number) => {
    console.log(_id)
  }

  const handleEdit = () => {}
  const columns = [
    {
      name: "action",
      label: "Actions",
      options: {
        customBodyRender: (value: any, tableMeta: any) => {
          const id = data[tableMeta?.rowIndex]?._id
          return (
            <Box>
              {isEdit?._id !== id ? (
                <>
                  <Tooltip
                    title="Edit"
                    aria-label="delete"
                    className={classes.cursor}
                  >
                    <Edit
                      onClick={() => {
                        const index = tableMeta?.rowIndex
                        console.log(data[index])
                        setEdit({
                          _id: index,
                          name: data[index]?.name,
                        })
                      }}
                    />
                  </Tooltip>
                  <Tooltip
                    style={{ color: "#CC3300" }}
                    title="Delete"
                    aria-label="delete"
                    className={classes.cursor}
                  >
                    <Delete onClick={handleEdit} />
                  </Tooltip>
                </>
              ) : (
                <>
                  <Tooltip
                    title="Confirm"
                    aria-label="delete"
                    className={classes.cursor}
                  >
                    <Done
                      style={{ color: "#1bb55c", fontSize: 25 }}
                      onClick={() => handleUpdate(id)}
                    />
                  </Tooltip>
                  <Tooltip
                    title="Cancel"
                    aria-label="delete"
                    className={classes.cursor}
                  >
                    <Close
                      onClick={() => {
                        setEdit({
                          _id: -1,
                          name: "",
                        })
                      }}
                      style={{ color: "#CC3300", fontSize: 25 }}
                    />
                  </Tooltip>
                </>
              )}
            </Box>
          )
        },
      },
    },
    {
      name: "name",
      label: "Name",
      options: {
        customBodyRender: (value: any, tableMeta: any) => {
          // const id = data ? data[tableMeta?.rowIndex]?.id : -1
          return (
            <Box>
              {isEdit?._id === tableMeta?.rowIndex ? (
                <TextField
                  InputProps={{
                    style: { fontSize: 14 },
                  }}
                  variant="standard"
                  value={isEdit?.name}
                  onChange={(event) =>
                    setEdit({ ...isEdit, name: event.target.value })
                  }
                  error={isEdit?.name?.length === 0 ? true : false}
                />
              ) : (
                value
              )}
            </Box>
          )
        },
      },
    },
  ]

  const data: any = [
    { _id: 0, name: "Gabby George" },
    { _id: 1, name: "Gabby George222" },
  ]

  const options: any = {
    filterType: "dropdown",
    responsive: "scroll",
  }

  return (
    <MUIDataTable
      title={"ACME Employee list"}
      data={data}
      columns={columns}
      options={options}
    />
  )
}
