import React from 'react'
import { Stack } from '@mui/material'
import { logo } from '../Utilities/Constants'
import { Link } from 'react-router-dom'
import {VerifiedUser} from '@mui/icons-material'
import SearchBar from './SearchBar'



const Navbar = () => {
  return (
    <div className='text-white'>
     <Stack direction="row" 
     alignItems="center" 
     p={2} sx={{position:"sticky",background:"#000",top:0,justifyContent:"space-between"}}>
      <Link to="/" className='text-white flex items-center gap-2'>
        <img src={logo} alt="logo" className='w-[40px]' />
        <span className='hidden md:block text-sm font-medium'>vidTube</span>
      </Link>
      <SearchBar/>


     </Stack>
    </div>
  )
}

export default Navbar
