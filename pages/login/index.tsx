import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Avatar from "@mui/material/Avatar"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import Grid from "@mui/material/Grid"
import Link from "@mui/material/Link"
import Paper from "@mui/material/Paper"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
import { withIronSessionSsr } from "iron-session/next"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import Progress from "../../components/Progress"
import { sessionOptions } from "../../lib/iron-session"
import { login } from "../../redux/actions/userActions"
import AppState from "../../redux/types"

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req }: any) {
    const jwt = req.session.jwt
    if (jwt) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      }
    }
    return {
      props: { jwt: false },
    }
  },
  sessionOptions
)
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

export default function SignInSide() {
  const dispatch = useDispatch()
  const { username, loading } = useSelector((state: AppState) => state.user)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const req = {
      username: data.get("email") as string,
      password: data.get("password") as string,
    }
    dispatch(login(req))
  }

  return (
    <Box>
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
        <Grid
          position={"relative"}
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#008000" }}>
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
              {username === "null" && (
                <Typography
                  style={{ fontSize: 14, color: "red", marginLeft: 3 }}
                >
                  Tên đăng nhập hoặc mật khẩu không đúng!
                </Typography>
              )}
              <Button
                style={{ background: "#008000" }}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Đăng nhập
              </Button>
              <Copyright sx={{ mt: 5 }} />
            </Box>
            {loading && <Progress position="absolute" />}
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
