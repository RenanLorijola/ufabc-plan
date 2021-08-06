import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import { COLORS } from 'styles/constants'
import { Subject } from 'types'

const ProgressBox: React.FC<any> = ({
  type,
  progress,
  total,
  initials
}: {
  type: Subject['type']
  progress: number
  total: number
  initials?: string
}): JSX.Element => {
  const displayName = {
    BI: 'OBRIGATÓRIAS',
    CE: 'OBRIGATORIAS',
    limitado: 'LIMITADAS',
    livre: 'LIVRES'
  }
  return (
    <Grid item xs={12} sm={12} md={6}>
      <div
        style={{
          background: COLORS.subject[type],
          border: '1px black solid',
          borderRadius: 2,
          padding: '10px 15px',
          width: '80%',
          margin: '10px auto'
        }}
      >
        <Typography fontWeight={700}>
          {displayName[type]} {initials ?? ''}: {progress}/{total}
        </Typography>
      </div>
    </Grid>
  )
}

export default ProgressBox
