import {
  Autocomplete,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField
} from '@material-ui/core'
import React from 'react'
import { AddSubjectDialogProps, Subject } from 'types'
import { useState } from 'react'
import { useSubjects } from 'context/subjectsContext'

const AddSubjectDialog: React.FC<AddSubjectDialogProps> = ({
  open,
  handleClose,
  handleAddSubject
}): JSX.Element => {
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null)

  const { allAvailableSubjects } = useSubjects()

  return (
    <Dialog open={open} onClose={() => handleClose()}>
      <DialogTitle>Adicione matérias no quadrimestre</DialogTitle>
      <DialogContent sx={{ height: '60vh', maxHeight: 600, minHeight: 300 }}>
        <DialogContentText>
          Encontre a matéria que você procura digitando seu nome na caixa abaixo
        </DialogContentText>
        <Autocomplete
          disablePortal
          getOptionLabel={(option) => option.name}
          options={allAvailableSubjects}
          onChange={(event, value: Subject | null) => {
            setSelectedSubject(value)
          }}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          noOptionsText="Nenhuma matéria encontrada"
          sx={{
            width: '100%',
            marginTop: 5,
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
          renderInput={(params) => <TextField {...params} label="Matéria" />}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleClose()}>Cancelar</Button>
        <Button
          disabled={!selectedSubject}
          onClick={() => {
            handleAddSubject(selectedSubject)
            handleClose()
          }}
        >
          Adicionar
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default AddSubjectDialog
