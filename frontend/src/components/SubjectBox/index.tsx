import React from 'react'
import StyledSubjectBox from './StyledSubjectBox'
import StyledBoxTitle from './StyledBoxTitle'
import StyledSubjectTPI from './StyledSubjectTPI'
import DeleteSubjectButton from 'components/DeleteSubjectButton'

const SubjectBox: React.FC<any> = ({
  id,
  name,
  teorical,
  practical,
  individual,
  type,
  quadri
}): JSX.Element => {
  return (
    <StyledSubjectBox type={type}>
      <DeleteSubjectButton
        subject={{
          id,
          name,
          teorical,
          practical,
          individual,
          type
        }}
        quadri={quadri}
      />
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
