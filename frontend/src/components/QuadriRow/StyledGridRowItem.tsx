import React from 'react'
import { Grid } from '@material-ui/core'

const StyledGridRowItem = ({
  children
}: {
  children: React.ReactNode
}): JSX.Element => {
  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={12}
      lg={12}
      xl={12}
      sx={{
        display: 'flex'
      }}
    >
      {children}
    </Grid>
  )
}

export default StyledGridRowItem
