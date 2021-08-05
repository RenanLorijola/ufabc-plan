import React from 'react'
import { Button } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import StyledBoxTitle from 'components/SubjectBox/StyledBoxTitle'
import { AddSubjectBoxProps } from 'types'

const AddSubjectBox: React.FC<AddSubjectBoxProps> = ({
  openDialog
}): JSX.Element => {
  return (
    <Button
      variant="text"
      color="primary"
      sx={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        border: 'none',
        background: '#f1f1f1',
        borderRadius: '0px'
      }}
      onClick={() => openDialog()}
    >
      <StyledBoxTitle name="Adicionar materia" />
      <AddIcon color="primary" fontSize="medium" />
    </Button>
  )
}

export default AddSubjectBox
