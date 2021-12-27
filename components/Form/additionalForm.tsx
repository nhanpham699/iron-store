import AddIcon from "@mui/icons-material/Add"
import Avatar from "@mui/material/Avatar"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { createDataRequest } from "../../redux/actions/productActions"
import AppState from "../../redux/types"
import Progress from "../Progress"

export default function AdditionalForm({ handleClose }: any) {
  const dispatch = useDispatch()
  const { loading } = useSelector((state: AppState) => state.products)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const req = {
      name: data.get("name") as string,
      date: data.get("date") as string,
      type: data.get("type") as string,
      price: Number(data.get("price")),
      quantity: Number(data.get("quantity")),
    }
    dispatch(createDataRequest(req))
    handleClose()
  }

  return (
    <Box>
      <Grid container component="main">
        <CssBaseline />
        <Box
          sx={{
            my: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#008000" }}>
            <AddIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Thêm hàng vào kho
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              size="small"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Tên hàng"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <TextField
              size="small"
              margin="normal"
              required
              fullWidth
              name="price"
              label="Giá vốn"
              type="number"
              id="price"
              autoComplete="price"
            />
            <TextField
              size="small"
              margin="normal"
              required
              fullWidth
              name="quantity"
              label="Số lượng"
              type="number"
              id="quantiry"
              autoComplete="quantity"
            />
            <TextField
              size="small"
              margin="normal"
              required
              fullWidth
              name="date"
              label="Ngày nhập"
              id="date"
              autoComplete="date"
            />
            <TextField
              size="small"
              margin="normal"
              required
              fullWidth
              name="type"
              label="Loại hàng"
              id="type"
              autoComplete="type"
            />
            <Button
              style={{ background: "#008000" }}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Thêm
            </Button>
          </Box>
          {loading && <Progress position="absolute" />}
        </Box>
      </Grid>
    </Box>
  )
}
