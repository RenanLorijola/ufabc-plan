import SubjectTable from 'components/SubjectTable'
import React from 'react'
import { curso } from 'api/mocks'

const Home: React.FC = (): JSX.Element => {
  return <SubjectTable course={curso} />
}

export default Home
