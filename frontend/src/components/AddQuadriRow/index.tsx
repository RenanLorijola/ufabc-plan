import { Button } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import StyledGridRowItem from 'components/QuadriRow/StyledGridRowItem'
import { useSubjects } from 'context/subjectsContext'
import React from 'react'

const AddQuadriRow: React.FC = (): JSX.Element => {
  const { handleAddQuadri } = useSubjects()

  return (
    <StyledGridRowItem>
      <Button
        variant="contained"
        color="primary"
        sx={{
          textAlign: 'center',
          width: '100%',
          borderRadius: '0',
          marginTop: '1px'
        }}
        onClick={handleAddQuadri}
      >
        Adicionar quadrimestre{' '}
        <AddIcon sx={{ color: '#fff' }} fontSize="medium" />
      </Button>
    </StyledGridRowItem>
  )
}

export default AddQuadriRow
