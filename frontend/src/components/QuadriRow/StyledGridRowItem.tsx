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
      sx={{
        display: 'flex',
        borderColor: 'black',
        borderTopWidth: '1px',
        borderBottomWidth: '1px',
        borderLeftWidth: '0',
        borderRight: '0',
        borderStyle: 'solid'
      }}
    >
      {children}
    </Grid>
  )
}

export default StyledGridRowItem
