import React from 'react'
import { SubjectTable, Container, ProgressBox } from 'components'
import { Grid, Typography } from '@material-ui/core'

const Home: React.FC = (): JSX.Element => {
  return (
    <Container>
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          flexWrap: 'wrap',
          marginTop: 20
        }}
      >
        <Typography
          variant="h2"
          fontSize={40}
          fontWeight={700}
          noWrap={true}
          marginTop={5}
          marginBottom={5}
        >
          Bem vindo, Renan
        </Typography>
        <Grid container padding={2} marginBottom={5}>
          <ProgressBox type="BI" progress={12} total={90} initials="BC&T" />
          <ProgressBox type="CE" progress={20} total={70} initials="BCC" />
          <ProgressBox type="limitado" progress={4} total={30} />
          <ProgressBox type="livre" progress={12} total={12} />
        </Grid>
        <div style={{ height: 'fit-content', width: '100%' }}>
          <SubjectTable />
        </div>
      </div>
    </Container>
  )
}

export default Home
