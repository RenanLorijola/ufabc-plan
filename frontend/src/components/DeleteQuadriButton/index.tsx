import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import { useSubjects } from 'context/subjectsContext'
import { ConfirmationDialog } from 'components'

const DeleteQuadriButton: React.FC<any> = ({
  quadri
}: {
  quadri: number
}): JSX.Element => {
  const [open, setOpen] = useState(false)
  const { handleRemoveQuadri } = useSubjects()

  const handleCloseDialog = (): void => {
    setOpen(false)
  }

  const handleRemoveRow = (): void => {
    handleRemoveQuadri(quadri)
  }

  return (
    <>
      <ConfirmationDialog
        open={open}
        handleClose={handleCloseDialog}
        onConfirm={handleRemoveRow}
      />
      <Button
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          zIndex: 1,
          width: '100%',
          padding: '5px 0',
          minWidth: 0
        }}
        onClick={() => setOpen(true)}
        color="error"
      >
        <HighlightOffIcon color="error" />
      </Button>
    </>
  )
}

export default DeleteQuadriButton
