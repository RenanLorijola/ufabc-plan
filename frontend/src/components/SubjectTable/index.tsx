import React from 'react'
import { QuadriRowProps } from 'types'
import { v4 as uuid } from 'uuid'
import { QuadriRow } from 'components'
import { Grid } from '@material-ui/core'

const SubjectTable = ({
  course
}: {
  course: Array<QuadriRowProps['subjects']>
}): JSX.Element => {
  return (
    <Grid container>
      {course.map((subjects, index) => {
        return <QuadriRow key={uuid()} subjects={subjects} quadri={index + 1} />
      })}
    </Grid>
  )
}

export default SubjectTable
