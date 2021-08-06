import React from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core'

const ConfirmationDialog: React.FC<any> = ({
  open,
  onConfirm,
  handleClose
}: {
  open: boolean
  onConfirm: () => void
  handleClose: () => void
}): JSX.Element => {
  const handleConfirm = (): void => {
    onConfirm()
    handleClose()
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {'Deseja realmente excluir o quadrimestre?'}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Excluir um quadrimestre pode afetar toda sua tabela de planejamento e
          não será possivel restaura-la novamente!
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button color="error" onClick={handleConfirm}>
          Deletar
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default ConfirmationDialog
