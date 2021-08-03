export type AddSubjectDialogProps = {
  open: boolean
  handleClose: () => void
  handleAddSubject: (subject: Subject | null) => void
}
