import ModalUnstyled from "@mui/base/ModalUnstyled"
import { AddCircle } from "@mui/icons-material"
import IconButton from "@mui/material/IconButton"
import { Box, styled } from "@mui/system"
import * as React from "react"
import AdditionalForm from "../AdditionalForm"

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Backdrop = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`

const style = {
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  p: 2,
  px: 4,
  pb: 3,
}

export default function AdditionalModal() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <IconButton
        style={{
          position: "absolute",
          right: 220,
          top: 12,
          zIndex: 10,
          color: "#008000",
        }}
        onClick={handleOpen}
      >
        <AddCircle />
      </IconButton>

      <StyledModal
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
      >
        <Box sx={style}>
          <AdditionalForm handleClose={handleClose} />
        </Box>
      </StyledModal>
    </div>
  )
}
