import React from 'react'
import { Grid } from '@material-ui/core'
import { Subject } from 'types'
import { SubjectBox } from 'components'

const StyledSubjectGrid = ({
  subject,
  children
}: {
  subject?: Subject
  children?: React.ReactNode
}): JSX.Element => {
  return (
    <Grid item minWidth={120} xs={4} sm={3} md={3} lg={2} xl={2}>
      {subject ? (
        <SubjectBox
          teorical={subject.teorical}
          practical={subject.practical}
          individual={subject.individual}
          type={subject.type}
          name={subject.name}
        />
      ) : (
        children
      )}
    </Grid>
  )
}

export default StyledSubjectGrid
