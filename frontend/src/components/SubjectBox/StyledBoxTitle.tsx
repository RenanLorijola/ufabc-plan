import React from 'react'
import { Typography } from '@material-ui/core'
import { SubjectBoxProps } from 'types'

const StyledSubjectName = ({
  name
}: {
  name: SubjectBoxProps['name']
}): JSX.Element => {
  return (
    <Typography
      variant="body1"
      sx={{
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        height: 100,
        display: 'flex',
        alignItems: 'center'
      }}
    >
      {name}
    </Typography>
  )
}

export default StyledSubjectName
