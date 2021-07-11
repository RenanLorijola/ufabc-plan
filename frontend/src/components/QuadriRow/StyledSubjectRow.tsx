import React from 'react'
import { Grid } from '@material-ui/core'

const StyledSubjectRow = ({
  children
}: {
  children: React.ReactNode
}): JSX.Element => {
  return (
    <Grid
      container
      wrap="nowrap"
      sx={{
        overflowX: 'auto'
      }}
    >
      {children}
    </Grid>
  )
}

export default StyledSubjectRow
