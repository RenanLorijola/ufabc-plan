import React from 'react'
import { SubjectBoxProps } from 'types'

const StyledSubjectTPI = ({
  teorical,
  practical,
  individual
}: {
  teorical: SubjectBoxProps['teorical']
  practical: SubjectBoxProps['practical']
  individual: SubjectBoxProps['individual']
}): JSX.Element => {
  return (
    <span>
      <strong>
        {teorical}-{practical}-{individual}
      </strong>
    </span>
  )
}

export default StyledSubjectTPI
