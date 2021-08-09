import React from 'react'
import { v4 as uuid } from 'uuid'
import { QuadriRow } from 'components'
import { Grid } from '@material-ui/core'
import AddQuadriRow from 'components/AddQuadriRow'
import { Subject } from 'types'

const SubjectTable = ({ subjects }: { subjects: Subject[][] }): JSX.Element => {
  return (
    <Grid
      container
      sx={{
        background: 'black',
        border: '2px black solid',
        borderTopWidth: 1,
        borderLeft: 'none'
      }}
      spacing={0.25}
    >
      {subjects.map((quadriSubjects, index: number) => {
        return (
          <QuadriRow
            key={uuid()}
            subjects={quadriSubjects}
            quadri={index + 1}
          />
        )
      })}
      <AddQuadriRow />
    </Grid>
  )
}

export default SubjectTable
