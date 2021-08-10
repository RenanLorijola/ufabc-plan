import React from 'react'
import { SubjectTable, Container, ProgressBox } from 'components'
import { Grid, Typography } from '@material-ui/core'
import { aluno, matricula, curso } from 'api/mocks'
import { useSubjects } from 'context/subjectsContext'
import { useEffect } from 'react'
import { useState } from 'react'

const Matricula: React.FC = (): JSX.Element => {
  const { subjects } = useSubjects()

  const [matriculas, setMatricula] = useState(matricula)

  useEffect(() => {
    const doneSubjects = subjects.flat()
    const obrigatoriasBI = doneSubjects.reduce((total, subject) => {
      if (subject.type === 'BI') {
        total += Number(subject.creditos)
      }
      return total
    }, 0)
    const obrigatoriasCE = doneSubjects.reduce((total, subject) => {
      if (subject.type === 'CE') {
        total += Number(subject.creditos)
      }
      return total
    }, 0)
    const limitadas = doneSubjects.reduce((total, subject) => {
      if (subject.type === 'limitado') {
        total += Number(subject.creditos)
      }
      return total
    }, 0)
    const livres = doneSubjects.reduce((total, subject) => {
      if (subject.type === 'livre') {
        total += Number(subject.creditos)
      }
      return total
    }, 0)
    const matriculaObj = {
      ...matricula
    }

    matriculaObj.disciplinas = subjects
    matriculaObj.obrigatoriasBI = obrigatoriasBI
    matriculaObj.obrigatoriasCE = obrigatoriasCE
    matriculaObj.limitadas = limitadas
    matriculaObj.livres = livres

    setMatricula(matriculaObj)
  }, [subjects])

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
          Bem vindo, {aluno.nome ?? 'aluno'}
        </Typography>
        <Grid container padding={2} marginBottom={5}>
          <ProgressBox
            type="BI"
            progress={matriculas.obrigatoriasBI}
            total={curso.obrigatoriasBI}
            initials={matriculas.cursoBI}
          />
          {matriculas.cursoCE && (
            <ProgressBox
              type="CE"
              progress={matriculas.obrigatoriasCE}
              total={curso.obrigatorias}
              initials={matriculas.cursoCE}
            />
          )}
          <ProgressBox
            type="limitado"
            progress={matriculas.limitadas}
            total={curso.limitadas}
          />
          <ProgressBox
            type="livre"
            progress={matriculas.livres}
            total={curso.livres}
          />
        </Grid>
        <div style={{ height: 'fit-content', width: '100%' }}>
          <SubjectTable subjects={subjects} />
        </div>
      </div>
    </Container>
  )
}

export default Matricula
