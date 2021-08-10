import React, { createContext, useContext } from 'react'
import { useState } from 'react'

const UserContext = createContext<any>({
  id: -1,
  name: '',
  ra: '',
  token: '',
  updateUser: () => {
    // default value.
  },
  cursoId: -1
})

const UserProvider: React.FC = ({ children }) => {
  const [id, setId] = useState<number>(-1)
  const [cursoId, setCursoId] = useState<number>(-1)
  const [name, setName] = useState<string>('')
  const [ra, setRa] = useState<string>('')
  const [token, setToken] = useState<string>('')

  const updateUser = (
    name?: string,
    ra?: string,
    token?: string,
    id?: number,
    cursoId?: number
  ): void => {
    name && setName(name)
    ra && setRa(ra)
    token && setToken(token)
    id && setId(id)
    cursoId && setCursoId(cursoId)
  }

  return (
    <UserContext.Provider
      value={{
        id,
        name,
        ra,
        token,
        updateUser,
        cursoId
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider

export function useUser(): any {
  return useContext(UserContext)
}
