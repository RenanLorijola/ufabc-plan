import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { COLORS } from 'styles/constants'
import { SubjectBoxProps } from 'types'

const SubjectBox: React.FC<SubjectBoxProps> = ({
  name,
  teoric,
  practical,
  individual,
  type
}): JSX.Element => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: 1,
        background: COLORS[type],
        textAlign: 'center',
        border: '1px black solid',
        borderBottom: 'none',
        borderTop: 'none'
      }}
    >
      <Typography
        variant="body1"
        sx={{
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          height: 100
        }}
      >
        {name}
      </Typography>
      <span>
        <strong>{`${teoric}-${practical}-${individual}`}</strong>
      </span>
    </Box>
  )
}

export default SubjectBox
