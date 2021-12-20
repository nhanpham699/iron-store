import { Box } from "@mui/material"
import MaterialTable from "material-table"
import React, { useState } from "react"

export default function Producttable() {
  type IType =
    | "string"
    | "boolean"
    | "numeric"
    | "date"
    | "datetime"
    | "time"
    | "currency"
  const string: IType = "string"

  const [columns, setColumns] = useState([
    { title: "Name", field: "name", type: "string" as const },
    {
      title: "Surname",
      field: "surname",
      initialEditValue: "initial edit value",
      type: "string" as const,
    },
    { title: "Birth Year", field: "birthYear", type: "string" as const },
    {
      title: "Birth Place",
      field: "birthCity",
      lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
      type: "string" as const,
    },
  ])

  const [data, setData] = useState([
    {
      name: "Mehmet",
      surname: "Baran",
      birthYear: 1987,
      birthCity: 63,
      type: string,
    },
    {
      name: "Zerya Betül",
      surname: "Baran",
      birthYear: 2017,
      birthCity: 34,
      type: string,
    },
  ])
  return (
    <Box>
      <MaterialTable
        title="Editable Preview"
        columns={columns}
        data={data}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve: any) => {
              setTimeout(() => {
                setData([...data, newData])
                resolve()
              }, 1000)
            }),
          onRowUpdate: (newData, oldData: any) =>
            new Promise((resolve: any) => {
              setTimeout(() => {
                const dataUpdate = [...data]
                const index = oldData.tableData.id
                dataUpdate[index] = newData
                setData([...dataUpdate])

                resolve()
              }, 1000)
            }),
          onRowDelete: (oldData: any) =>
            new Promise((resolve: any) => {
              setTimeout(() => {
                const dataDelete = [...data]
                const index = oldData.tableData.id
                dataDelete.splice(index, 1)
                setData([...dataDelete])

                resolve()
              }, 1000)
            }),
        }}
      />
    </Box>
  )
}
