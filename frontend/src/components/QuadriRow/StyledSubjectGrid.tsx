import React from 'react'
import { Grid } from '@material-ui/core'
import { Subject } from 'types'
import { SubjectBox } from 'components'

const StyledSubjectGrid = ({
  subject,
  quadri,
  children
}: {
  subject?: Subject
  quadri?: number
  children?: React.ReactNode
}): JSX.Element => {
  return (
    <Grid item minWidth={150} xs={4} sm={3} md={3} lg={2} xl={2}>
      {subject ? (
        <SubjectBox
          id={subject.id}
          teorical={subject.teorical}
          practical={subject.practical}
          individual={subject.individual}
          type={subject.type}
          name={subject.name}
          quadri={quadri}
        />
      ) : (
        children
      )}
    </Grid>
  )
}

export default StyledSubjectGrid
