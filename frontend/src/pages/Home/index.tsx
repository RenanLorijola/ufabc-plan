import { SubjectTable, Container } from 'components'
import React from 'react'
import { curso } from 'api/mocks'

const Home: React.FC = (): JSX.Element => {
  return (
    <Container>
      <SubjectTable course={curso} />
    </Container>
  )
}

export default Home
