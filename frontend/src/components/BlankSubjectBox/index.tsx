import StyledBoxTitle from 'components/SubjectBox/StyledBoxTitle'
import React from 'react'

const BlankSubjectBox: React.FC = (): JSX.Element => {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        background: 'white'
      }}
    >
      <StyledBoxTitle name="" />
    </div>
  )
}

export default BlankSubjectBox
