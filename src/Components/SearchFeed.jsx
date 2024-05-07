
import React,{useState,useEffect} from 'react'
import { Box,Typography } from '@mui/material'
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from '../Utilities/FetchFormApi';
import { Videos } from '.';

const SearchFeed = () => {
  const {searchTerm} = useParams()
  const [videos,setVideos]= useState([])

useEffect(()=>{
fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
.then((data)=>setVideos(data.items))
},[searchTerm]);


  return (
    <div className='text-white '>
       <Box p={2} sx={{overflowY:"auto",height:"90vh",flex:2}}>
        <Typography variant='h6'>
          
        Search Results For : <span className='text-red-500'>{searchTerm}</span> videos
       
        </Typography>
        <Videos videos={videos}/>
      </Box>
    </div>
   
  ) 
}

export default SearchFeed


