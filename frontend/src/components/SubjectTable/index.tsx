import React from 'react'
import { Subject } from 'types'
import { v4 as uuid } from 'uuid'
import { QuadriRow } from 'components'
import { Grid } from '@material-ui/core'

const SubjectTable = ({ course }: { course: Subject[][] }): JSX.Element => {
  return (
    <Grid
      container
      sx={{
        background: 'black',
        border: '2px black solid',
        borderLeft: 'none'
      }}
      spacing={0.25}
    >
      {course.map((subjects, index) => {
        return <QuadriRow key={uuid()} subjects={subjects} quadri={index + 1} />
      })}
    </Grid>
  )
}

export default SubjectTable
