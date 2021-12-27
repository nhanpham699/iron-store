import { Close, Delete, Done, Edit } from "@mui/icons-material"
import SellIcon from "@mui/icons-material/Sell"
import { Box, TextField, Tooltip } from "@mui/material"
import { createStyles, makeStyles } from "@mui/styles"
import dynamic from "next/dynamic"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { formatMoney } from "../../hooks/money"
import {
  deleteDataRequest,
  editData,
  loadDataRequest,
  updateDataRequest,
} from "../../redux/actions/productActions"
import { initEditedState } from "../../redux/reducers/productReducer"
import AppState from "../../redux/types"
import AdditionalModal from "../Modal/additionalModal"
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

  useEffect(() => {
    dispatch(loadDataRequest())
  }, [])

  const handleUpdate = () => {
    dispatch(updateDataRequest(isEdited))
  }

  const handleDelete = (_id: string) => {
    // dispatch(editData(initEditedState))
    dispatch(deleteDataRequest(_id))
  }

  const columns = [
    {
      name: "action",
      label: "Thao tác",
      options: {
        customBodyRender: (value: any, tableMeta: any) => {
          return (
            <Box>
              {isEdited?._id != data[tableMeta?.rowIndex]?._id ? (
                <>
                  <Tooltip
                    style={{ color: "#CC3300" }}
                    title="Xóa"
                    aria-label="delete"
                    className={classes.cursor}
                  >
                    <Delete
                      onClick={() =>
                        handleDelete(data[tableMeta?.rowIndex]?._id)
                      }
                    />
                  </Tooltip>
                  <Tooltip
                    title="Sửa"
                    aria-label="edit"
                    className={classes.cursor}
                  >
                    <Edit
                      onClick={() => {
                        dispatch(
                          editData({
                            _id: data[tableMeta?.rowIndex]?._id,
                            name: data[tableMeta?.rowIndex]?.name,
                            price: data[tableMeta?.rowIndex]?.price,
                            type: data[tableMeta?.rowIndex]?.type,
                            quantity: data[tableMeta?.rowIndex]?.quantity,
                            date: data[tableMeta?.rowIndex]?.date,
                          })
                        )
                      }}
                    />
                  </Tooltip>
                </>
              ) : (
                <>
                  <Tooltip
                    title="Xác nhận"
                    aria-label="confirm"
                    className={classes.cursor}
                  >
                    <Done
                      style={{ color: "#1bb55c", fontSize: 25 }}
                      onClick={handleUpdate}
                    />
                  </Tooltip>
                  <Tooltip
                    title="Hủy"
                    aria-label="close"
                    className={classes.cursor}
                  >
                    <Close
                      onClick={() => {
                        dispatch(editData(initEditedState))
                      }}
                      style={{ color: "#CC3300", fontSize: 25 }}
                    />
                  </Tooltip>
                </>
              )}
              <Tooltip
                title="Bán"
                aria-label="delete"
                className={classes.cursor}
              >
                <SellIcon style={{ color: "#008000", fontSize: 23 }} />
              </Tooltip>
            </Box>
          )
        },
      },
    },
    {
      name: "name",
      label: "Tên hàng",
      options: {
        customBodyRender: (value: any, tableMeta: any) => {
          return (
            <Box>
              {isEdited?._id === data[tableMeta?.rowIndex]?._id ? (
                <TextField
                  InputProps={{
                    style: { fontSize: 14 },
                  }}
                  variant="standard"
                  value={isEdited?.name}
                  onChange={(event) =>
                    dispatch(
                      editData({ ...isEdited, name: event.target.value })
                    )
                  }
                  error={isEdited.name.length === 0 ? true : false}
                />
              ) : (
                value
              )}
            </Box>
          )
        },
      },
    },
    {
      name: "price",
      label: "Giá vốn",
      options: {
        customBodyRender: (value: any, tableMeta: any) => {
          return (
            <Box>
              {isEdited?._id === data[tableMeta?.rowIndex]?._id ? (
                <TextField
                  type="number"
                  InputProps={{
                    style: { fontSize: 14 },
                  }}
                  variant="standard"
                  value={isEdited?.price}
                  onChange={(event) =>
                    dispatch(
                      editData({
                        ...isEdited,
                        price: Number(event.target.value),
                      })
                    )
                  }
                  error={isEdited.price === 0 ? true : false}
                />
              ) : (
                formatMoney(value)
              )}
            </Box>
          )
        },
      },
    },
    {
      name: "type",
      label: "Loại hàng",
      options: {
        customBodyRender: (value: any, tableMeta: any) => {
          return (
            <Box>
              {isEdited?._id === data[tableMeta?.rowIndex]?._id ? (
                <TextField
                  InputProps={{
                    style: { fontSize: 14 },
                  }}
                  variant="standard"
                  value={isEdited?.type}
                  onChange={(event) =>
                    dispatch(
                      editData({
                        ...isEdited,
                        type: event.target.value,
                      })
                    )
                  }
                  error={isEdited.type.length === 0 ? true : false}
                />
              ) : (
                value
              )}
            </Box>
          )
        },
      },
    },
    {
      name: "quantity",
      label: "Số lượng trong kho",
      options: {
        customBodyRender: (value: any, tableMeta: any) => {
          return (
            <Box>
              {isEdited?._id === data[tableMeta?.rowIndex]?._id ? (
                <TextField
                  type="number"
                  InputProps={{
                    style: { fontSize: 14 },
                  }}
                  variant="standard"
                  value={isEdited?.quantity}
                  onChange={(event) =>
                    dispatch(
                      editData({
                        ...isEdited,
                        quantity: Number(event.target.value),
                      })
                    )
                  }
                  error={isEdited.quantity === 0 ? true : false}
                />
              ) : (
                value
              )}
            </Box>
          )
        },
      },
    },
    {
      name: "date",
      label: "Ngày nhập kho",
      options: {
        customBodyRender: (value: any, tableMeta: any) => {
          return (
            <Box>
              {isEdited?._id === data[tableMeta?.rowIndex]?._id ? (
                <TextField
                  InputProps={{
                    style: { fontSize: 14 },
                  }}
                  variant="standard"
                  value={isEdited?.date}
                  onChange={(event) =>
                    dispatch(
                      editData({
                        ...isEdited,
                        date: event.target.value,
                      })
                    )
                  }
                  error={isEdited.date.length === 0 ? true : false}
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

  return (
    <Box position="relative">
      <AdditionalModal />
      <MUIDataTable
        title={"Danh sách hàng trong kho"}
        data={data}
        columns={columns}
        // options={options}
      />
      {loading && <Progress position="absolute" />}
    </Box>
  )
}

export default Producttable
