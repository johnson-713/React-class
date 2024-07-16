import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div className='bg-[#000] flex p-[10px] gap-[10px] text-[#fff]'>
        <p style={location.pathname == '/' ? {color: '#fff'} : {}} onClick={() => navigate('/')}>Home</p>
        <p style={location.pathname == '/about' ? {color: '#fff'} : {}} onClick={() => navigate('/about')}>About</p>
        <p style={location.pathname == '/product' ? {color: '#fff'} : {}} onClick={() => navigate('/product')}>Product</p>
    </div>
  )
}
