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
      variant="contained"
      color="primary"
      sx={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        border: 'none',
        borderRadius: '0px'
      }}
      onClick={() => openDialog()}
    >
      <StyledBoxTitle name="Adicionar matéria" />
      <AddIcon sx={{ color: '#fff' }} fontSize="medium" />
    </Button>
  )
}

export default AddSubjectBox
