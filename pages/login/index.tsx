import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Avatar from "@mui/material/Avatar"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import Grid from "@mui/material/Grid"
import Link from "@mui/material/Link"
import Paper from "@mui/material/Paper"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
import * as React from "react"
import { useDispatch, useSelector } from "react-redux"
import Progress from "../../components/Progress"
import { login } from "../../redux/actions"

// const myLoader = ({ src, width, quality }: any) => {
//   return `${window.location.protocol}//${
//     window.location.host
//   }/${src}?w=${width}&q=${quality || 75}`
// }

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://www.facebook.com/C%E1%BB%ADa-h%C3%A0ng-S%E1%BA%AFt-Nh%C3%B4m-TH%C3%81I-TRINH-2135072320143013"
      >
        store's facebook
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  )
}

const theme = createTheme()

export default function SignInSide() {
  const dispatch = useDispatch()
  const { username, loading } = useSelector((state: any) => state)
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    // eslint-disable-next-line no-console
    const req = {
      username: data.get("email") as string,
      password: data.get("password") as string,
    }

    dispatch(login(req))
    console.log(req)
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url('/home.png')`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "green" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Đăng nhập
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Tên đăng nhập"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Mật khẩu"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                style={{ background: "green" }}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Đăng nhập
              </Button>
              <Copyright sx={{ mt: 5 }} />
              {/* <Typography>{loading.toString()}</Typography> */}
            </Box>
          </Box>
        </Grid>
      </Grid>
      {loading && <Progress bg="rgb(0 0 0 / 16%)" />}
    </ThemeProvider>
  )
}
