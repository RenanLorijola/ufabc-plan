import React, { useState } from 'react'
import { QuadriRowProps } from 'types'
import { v4 as uuid } from 'uuid'
import StyledSubjectRow from './StyledSubjectRow'
import StyledQuadriNameBox from './StyledQuadriNameBox'
import StyledSubjectGrid from './StyledSubjectGrid'
import StyledGridRowItem from './StyledGridRowItem'
import AddSubjectBox from 'components/AddSubjectBox'
import BlankSubjectBox from 'components/BlankSubjectBox'
import { useMediaQuery } from '@material-ui/core'
import { useEffect } from 'react'

const QuadriRow: React.FC<QuadriRowProps> = ({
  quadri,
  subjects
}): JSX.Element => {
  const [gridBoxes, setGridBoxes] = useState(5)

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
    <StyledGridRowItem>
      <StyledQuadriNameBox quadri={quadri} />
      <StyledSubjectRow>
        {subjects.map((subject) => {
          return <StyledSubjectGrid key={uuid()} subject={subject} />
        })}
        <StyledSubjectGrid>
          <AddSubjectBox />
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
  )
}

export default QuadriRow
