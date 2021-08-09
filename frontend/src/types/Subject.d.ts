import { SubjectBoxProps } from './SubjectBox'

export interface Subject extends SubjectBoxProps {
  id: number
  creditos: number
}

export interface SubjectContextProps {
  subjects: Subject[][]
  allAvailableSubjects: Subject[]
  handleSetSubjects: (subjects: Subject[][]) => void
  handleAddSubject: (subject: Subject, quadri: number) => void
  handleAddQuadri: () => void
  handleRemoveAvailableSubject: (subject: Subject) => void
  handleAddAvailableSubject: (subject: Subject) => void
  handleRemoveQuadri: (quadri: number) => void
  handleRemoveSubject: (subject: Subject, quadri: number) => void
}
