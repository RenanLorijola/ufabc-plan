import React from 'react'
import { Snackbar, Alert } from '@material-ui/core'
import { AlertComponentProps } from 'types/Alert'
import { v4 as uuid } from 'uuid'

const AlertComponent: React.FC<AlertComponentProps> = ({
  open,
  message,
  type,
  handleClose
}): JSX.Element => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      key={uuid()}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={type} sx={{ minWidth: '30vw' }}>
        {message}
      </Alert>
    </Snackbar>
  )
}

export default AlertComponent
