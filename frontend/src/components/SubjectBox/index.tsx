import React from 'react'
import { SubjectBoxProps } from 'types'
import StyledSubjectBox from './StyledSubjectBox'
import StyledSubjectName from './StyledSubjectName'
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
      <StyledSubjectName name={name} />
      <StyledSubjectTPI
        teorical={teorical}
        practical={practical}
        individual={individual}
      />
    </StyledSubjectBox>
  )
}

export default SubjectBox
