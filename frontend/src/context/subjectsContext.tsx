import React, { createContext, useContext } from 'react'
import { useEffect } from 'react'
import { useCallback } from 'react'
import { useState } from 'react'
import { Subject } from 'types'
import { SubjectContextProps } from 'types'
import { curso, todasMaterias } from 'api/mocks'

const SubjectsContext = createContext<SubjectContextProps>({
  subjects: [[]],
  allAvailableSubjects: [],
  handleSetSubjects: () => {
    // default value.
  },
  handleAddSubject: () => {
    // default value.
  },
  handleAddQuadri: () => {
    // default value.
  },
  handleAddAvailableSubject: () => {
    // default value.
  },
  handleRemoveAvailableSubject: () => {
    // default value.
  }
})

const SubjectsProvider: React.FC = ({ children }) => {
  const [subjects, setSubjects] = useState<Subject[][]>(curso)
  const [allAvailableSubjects, setAllAvailableSubjects] = useState<Subject[]>(
    []
  )

  useEffect(() => {
    const doneSubjects: Subject[] = []
    curso.forEach((subjects) => {
      doneSubjects.push(...subjects)
    }, [])
    const subjectsToAdd = todasMaterias.filter(
      (subject) => !doneSubjects.some((sbj) => sbj.id === subject.id)
    )
    setAllAvailableSubjects(subjectsToAdd)
  }, [])

  useEffect(() => {
    console.log(subjects)
  }, [subjects])

  const handleRemoveAvailableSubject = useCallback((subject: Subject): void => {
    setAllAvailableSubjects((sbjs) => {
      sbjs.splice(sbjs.indexOf(subject), 1)
      return sbjs
    })
  }, [])

  const handleAddAvailableSubject = useCallback((subject: Subject): void => {
    setAllAvailableSubjects((sbjs) => {
      sbjs.push(subject)
      return sbjs
    })
  }, [])

  const handleSetSubjects = useCallback((subjects: Subject[][]): void => {
    setSubjects(subjects)
  }, [])

  const handleAddSubject = useCallback(
    (subject: Subject, quadri: number): void => {
      setSubjects((sbjs) => {
        sbjs[quadri - 1].push(subject)
        return sbjs
      })
    },
    []
  )

  const handleAddQuadri = useCallback((): void => {
    setSubjects([...subjects, []])
  }, [setSubjects, subjects])

  return (
    <SubjectsContext.Provider
      value={{
        subjects,
        allAvailableSubjects,
        handleRemoveAvailableSubject,
        handleAddAvailableSubject,
        handleSetSubjects,
        handleAddSubject,
        handleAddQuadri
      }}
    >
      {children}
    </SubjectsContext.Provider>
  )
}

export default SubjectsProvider

export function useSubjects(): SubjectContextProps {
  return useContext(SubjectsContext)
}
