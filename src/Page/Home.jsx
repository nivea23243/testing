import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
  return (
    <div>
      <p onClick={()=>navigate('/')}>Home</p>
      <p onClick={()=>navigate('/kormangala')}>Kormangala</p>
      <p onClick={()=>navigate('/lipolaser')}>Lipo Laser</p>
      <p onClick={()=>navigate('/mumbai')}>Mumbai</p>
      <p onClick={()=>navigate('/skinvive')}>Skinvive</p>
    </div>
  )
}

export default Home
