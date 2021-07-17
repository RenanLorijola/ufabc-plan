import React from 'react'
import { Box } from '@material-ui/core'
import { SubjectBoxProps } from 'types'
import { COLORS } from 'styles/constants'

const StyledSubjectBox = ({
  type,
  children
}: {
  type: SubjectBoxProps['type']
  children: React.ReactNode
}): JSX.Element => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: 1,
        textAlign: 'center',
        borderRight: '2px black solid',
        background: COLORS[type]
      }}
    >
      {children}
    </Box>
  )
}

export default StyledSubjectBox
