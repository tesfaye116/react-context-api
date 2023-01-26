import { useState } from 'react'
import UserContextProvider from './hooks/userContext'
import UsersList from './pages/UsersList'
import NavBar from './components/NavBar'


function App() {
  return (
    <UserContextProvider>
      <NavBar />
      <UsersList />
    </UserContextProvider>
  )
}

export default App
