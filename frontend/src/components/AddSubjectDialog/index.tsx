import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core'
import React from 'react'
import { AddSubjectDialogProps } from 'types'

const AddSubjectDialog: React.FC<AddSubjectDialogProps> = ({
  open,
  handleClose
}): JSX.Element => {
  return (
    <Dialog open={open} onClose={() => handleClose()}>
      <DialogTitle>Subscribe</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleClose()}>Cancel</Button>
        <Button onClick={() => handleClose()}>Subscribe</Button>
      </DialogActions>
    </Dialog>
  )
}

export default AddSubjectDialog
