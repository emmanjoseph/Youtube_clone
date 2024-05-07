import React,{useState,useEffect} from 'react'
import { Box,Stack,Typography } from '@mui/material'
import Sidebar from './Sidebar'
import { fetchFromAPI } from '../Utilities/FetchFormApi';
import { Videos } from '.';

const Feed = () => {

  const [selectedCategory,setSelectedCategory]= useState("New");
  const [videos,setVideos]= useState([])

useEffect(()=>{
fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
.then((data)=>setVideos(data.items))
},[selectedCategory]);


  return (
    <div className='text-white '>
       <Stack sx={{flexDirection:{ sx:"column", md:"row"}}}>
      <Box sx={{height:{sx:'auto',md:'92vh'} ,borderRight:"1px solid #3d3d3d",px:{sx:0,md:1}}}>
        <Sidebar
        // pass down the states 
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        />
        <Typography className='copyright'
        variant='body2'
        sx={{my:1.5,color:'white'}}
        >
          copyright @mannuRWeb 2024
        </Typography>
      </Box>
      <Box p={2} sx={{overflowY:"auto",height:"90vh",flex:2}}>
        <Typography variant='h6'>
          
        {selectedCategory} <span className='text-red-500'>videos</span>
        </Typography>
        <Videos videos={videos}/>
      </Box>
    </Stack>
    </div>
   
  ) 
}

export default Feed
