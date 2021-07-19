import React from 'react'
import { SubjectBoxProps } from 'types'
import StyledSubjectBox from './StyledSubjectBox'
import StyledBoxTitle from './StyledBoxTitle'
import StyledSubjectTPI from './StyledSubjectTPI'

const SubjectBox: React.FC<SubjectBoxProps> = ({
  name,
  teorical,
  practical,
  individual,
  type
}): JSX.Element => {
  return (
    <StyledSubjectBox type={type}>
      <StyledBoxTitle name={name} />
      <StyledSubjectTPI
        teorical={teorical}
        practical={practical}
        individual={individual}
      />
    </StyledSubjectBox>
  )
}

export default SubjectBox
