import React from 'react'
import { Button } from '@material-ui/core'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import { useSubjects } from 'context/subjectsContext'
import { Subject } from 'types'

const DeleteSubjectButton: React.FC<any> = ({
  quadri,
  subject
}: {
  quadri: number
  subject: Subject
}): JSX.Element => {
  const { handleRemoveSubject } = useSubjects()

  const handleClick = (): void => {
    handleRemoveSubject(subject, quadri)
  }

  return (
    <>
      <Button
        sx={{
          position: 'absolute',
          top: 0,
          right: 5,
          zIndex: 1,
          padding: '5px 0',
          minWidth: 0
        }}
        onClick={handleClick}
        color="error"
      >
        <HighlightOffIcon color="error" />
      </Button>
    </>
  )
}

export default DeleteSubjectButton
