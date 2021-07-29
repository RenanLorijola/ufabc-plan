import { AlertColor } from '@material-ui/core'

export type AlertComponentProps = {
  open: boolean
  message: string
  type: AlertColor
  handleClose: () => void
}

export type AlertContextProps = {
  displayAlert: (
    message: string,
    newType: AlertColor,
    onCloseFunction?: () => void
  ) => void
}
