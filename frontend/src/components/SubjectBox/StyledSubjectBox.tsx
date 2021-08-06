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
        background: COLORS.subject[type],
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}
    >
      {children}
    </Box>
  )
}

export default StyledSubjectBox
