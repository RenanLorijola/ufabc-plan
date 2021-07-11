import React from 'react'
import { Grid } from '@material-ui/core'
import { SubjectBoxProps } from 'types'
import { SubjectBox } from 'components'

const StyledSubjectGrid = ({
  subject
}: {
  subject: SubjectBoxProps
}): JSX.Element => {
  return (
    <Grid item xs={4} sm={3} xl={2}>
      <SubjectBox
        teorical={subject.teorical}
        practical={subject.practical}
        individual={subject.individual}
        type={subject.type}
        name={subject.name}
      />
    </Grid>
  )
}

export default StyledSubjectGrid
