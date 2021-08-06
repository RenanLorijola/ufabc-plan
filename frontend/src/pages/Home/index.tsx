import { SubjectTable, Container } from 'components'
import React from 'react'

const Home: React.FC = (): JSX.Element => {
  return (
    <Container>
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          marginTop: 20,
          minHeight: 'calc(100vh - 128px)'
        }}
      >
        <div style={{ height: 'fit-content', width: '100%' }}>
          <SubjectTable />
        </div>
      </div>
    </Container>
  )
}

export default Home
