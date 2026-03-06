import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Page/Home'
import Kormangala from './Page/Kormangala'
import LipoLase from './Page/LipoLase'
import Mumbai from './Page/Mumbai'
import Skinvive from './Page/Skinvive'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route path='/kormangala' element={ <Kormangala /> }/>
        <Route path='/lipolaser' element={ <LipoLase /> }/>
        <Route path='/mumbai' element={ <Mumbai /> }/>
        <Route path='/skinvive' element={ <Skinvive /> }/>
      </Routes>
    </>
  )
}

export default App
