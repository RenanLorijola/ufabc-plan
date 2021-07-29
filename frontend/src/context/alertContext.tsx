import React, {
  createContext,
  MutableRefObject,
  useContext,
  useRef
} from 'react'
import { AlertColor } from '@material-ui/core'
import { useState } from 'react'
import AlertComponent from 'components/Alert'
import { AlertContextProps } from 'types'
import { useCallback } from 'react'
import { useEffect } from 'react'

const AlertContext = createContext<AlertContextProps>({
  displayAlert: () => {
    // default value.
  }
})

const AlertProvider: React.FC = ({ children }) => {
  const [open, setOpen] = useState<boolean>(false)
  const [message, setMessage] = useState<string>('')
  const [type, setType] = useState<AlertColor>('success')
  const onClose: MutableRefObject<undefined | (() => void)> = useRef(undefined)

  const handleClose = useCallback((): void => {
    onClose.current?.()
    setOpen(false)
  }, [onClose])

  useEffect(() => {
    if (!open) onClose.current = undefined
  })

  const displayAlert = (
    message: string,
    newType: AlertColor = 'success',
    onCloseFunction?: () => void
  ): void => {
    setMessage(message)
    setType(newType)
    setOpen(true)
    onClose.current = onCloseFunction
  }

  return (
    <AlertContext.Provider value={{ displayAlert }}>
      <AlertComponent
        open={open}
        message={message}
        type={type}
        handleClose={handleClose}
      />
      {children}
    </AlertContext.Provider>
  )
}

export default AlertProvider

export function useAlert(): AlertContextProps {
  return useContext(AlertContext)
}
