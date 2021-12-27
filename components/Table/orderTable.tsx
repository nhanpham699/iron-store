import { Box } from "@mui/material"
import { createStyles, makeStyles } from "@mui/styles"
import dynamic from "next/dynamic"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import AppState from "../../redux/types"
import Progress from "../Progress"

const MUIDataTable = dynamic(() => import("mui-datatables"), { ssr: false })

const useStyles = makeStyles(() =>
  createStyles({
    cursor: {
      margin: "0 4px",
      cursor: "pointer",
    },
  })
)

const Producttable = () => {
  const { data, loading, isEdited } = useSelector(
    (state: AppState) => state.products
  )

  const dispatch = useDispatch()
  const classes = useStyles()

  const handleUpdate = () => {}

  const columns = [
    { name: "date", label: "Ngày bán" },
    { name: "name", label: "Tên hàng" },
    { name: "price", label: "Giá bán" },
    { name: "type", label: "Loại hàng" },
    { name: "quantity", label: "Số lượng bán" },
  ]

  const options: any = {
    selectableRows: false,
  }

  return (
    <Box position="relative">
      <MUIDataTable
        title={"Danh sách đơn hàng"}
        data={data}
        columns={columns}
        options={options}
      />
      {loading && <Progress position="absolute" />}
    </Box>
  )
}

export default Producttable
