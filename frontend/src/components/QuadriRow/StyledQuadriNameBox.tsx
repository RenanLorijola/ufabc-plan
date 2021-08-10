import React from 'react'
import { Typography } from '@material-ui/core'
import { QuadriRowProps } from 'types'
import { DeleteQuadriButton } from 'components'

const StyledQuadriNameBox = ({
  quadri
}: {
  quadri: QuadriRowProps['quadri']
}): JSX.Element => {
  return (
    <div style={{ position: 'relative' }}>
      <DeleteQuadriButton quadri={quadri} />
      <Typography
        variant="body1"
        sx={{
          writingMode: 'vertical-lr',
          transform: 'rotate(180deg)',
          textAlign: 'center',
          padding: 1,
          background: 'white',
          borderLeft: '2px black solid',
          paddingBottom: '35px'
        }}
      >
        {quadri}º Quadrimestre
      </Typography>
    </div>
  )
}

export default StyledQuadriNameBox
