import React, { useState, useCallback } from 'react'
import { QuadriRowProps, Subject } from 'types'
import { v4 as uuid } from 'uuid'
import StyledSubjectRow from './StyledSubjectRow'
import StyledQuadriNameBox from './StyledQuadriNameBox'
import StyledSubjectGrid from './StyledSubjectGrid'
import StyledGridRowItem from './StyledGridRowItem'
import { AddSubjectBox, BlankSubjectBox, AddSubjectDialog } from 'components'
import { useMediaQuery } from '@material-ui/core'
import { useEffect } from 'react'
import { useSubjects } from 'context/subjectsContext'

const QuadriRow: React.FC<QuadriRowProps> = ({
  quadri,
  subjects
}): JSX.Element => {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [gridBoxes, setGridBoxes] = useState(5)

  const { handleRemoveAvailableSubject, handleAddSubject } = useSubjects()

  const handleDialogClose = useCallback((): void => {
    setDialogOpen(false)
  }, [])

  const handleDialogOpen = useCallback((): void => {
    setDialogOpen(true)
  }, [])

  const handleAddSubjectInRow = useCallback(
    (subject: Subject | null): void => {
      if (!subject) {
        return
      }
      handleAddSubject(subject, quadri)
      handleRemoveAvailableSubject(subject)
    },
    [handleAddSubject, handleRemoveAvailableSubject, quadri]
  )

  const sm = useMediaQuery('(min-width:600px)')
  const lg = useMediaQuery('(min-width:1200px)')

  useEffect(() => {
    if (!sm) {
      setGridBoxes(3)
      return
    }
    if (sm && !lg) {
      setGridBoxes(4)
      return
    }
    setGridBoxes(5)
  }, [sm, lg])

  return (
    <>
      <AddSubjectDialog
        open={dialogOpen}
        handleClose={handleDialogClose}
        handleAddSubject={handleAddSubjectInRow}
      />
      <StyledGridRowItem>
        <StyledQuadriNameBox quadri={quadri} />
        <StyledSubjectRow>
          {subjects.map((subject) => {
            return <StyledSubjectGrid key={uuid()} subject={subject} />
          })}
          <StyledSubjectGrid>
            <AddSubjectBox openDialog={handleDialogOpen} />
          </StyledSubjectGrid>
          {subjects.length < gridBoxes &&
            Array.from(Array(gridBoxes - subjects.length).keys()).map((_) => {
              return (
                <StyledSubjectGrid key={uuid()}>
                  <BlankSubjectBox />
                </StyledSubjectGrid>
              )
            })}
        </StyledSubjectRow>
      </StyledGridRowItem>
    </>
  )
}

export default QuadriRow
