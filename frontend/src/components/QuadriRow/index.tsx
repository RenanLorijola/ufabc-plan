import React from 'react'
import { QuadriRowProps } from 'types'
import { v4 as uuid } from 'uuid'
import StyledSubjectRow from './StyledSubjectRow'
import StyledQuadriNameBox from './StyledQuadriNameBox'
import StyledSubjectGrid from './StyledSubjectGrid'
import StyledGridRowItem from './StyledGridRowItem'

const QuadriRow: React.FC<QuadriRowProps> = ({
  quadri,
  subjects
}): JSX.Element => {
  return (
    <StyledGridRowItem>
      <StyledQuadriNameBox quadri={quadri} />
      <StyledSubjectRow>
        {subjects.map((subject) => {
          return <StyledSubjectGrid key={uuid()} subject={subject} />
        })}
      </StyledSubjectRow>
    </StyledGridRowItem>
  )
}

export default QuadriRow