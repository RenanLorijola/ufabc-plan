import { SubjectBoxProps } from './SubjectBox'

export interface Subject extends SubjectBoxProps {
  id: number
}

export interface SubjectContextProps {
  subjects: Subject[][]
  allAvailableSubjects: Subject[]
  handleSetSubjects: (subjects: Subject[][]) => void
  handleAddSubject: (subject: Subject, quadri: number) => void
  handleAddQuadri: () => void
  handleRemoveAvailableSubject: (subject: Subject) => void
  handleAddAvailableSubject: (subject: Subject) => void
}
