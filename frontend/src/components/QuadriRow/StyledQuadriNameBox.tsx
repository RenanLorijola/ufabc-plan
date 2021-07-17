import React from 'react'
import { Typography } from '@material-ui/core'
import { QuadriRowProps } from 'types'

const StyledQuadriNameBox = ({
  quadri
}: {
  quadri: QuadriRowProps['quadri']
}): JSX.Element => {
  return (
    <Typography
      variant="body1"
      sx={{
        writingMode: 'vertical-lr',
        transform: 'rotate(180deg)',
        textAlign: 'center',
        padding: 1,
        background: 'white',
        borderLeft: '2px black solid'
      }}
    >
      {quadri}º Quadrimestre
    </Typography>
  )
}

export default StyledQuadriNameBox
