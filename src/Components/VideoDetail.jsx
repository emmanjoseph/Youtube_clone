import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Typography,Box, Stack } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { fetchFromAPI } from '../Utilities/FetchFormApi'

const VideoDetail = () => {
  const [videoDetail,setVideoDetail]=useState(null)
  const {id} = useParams();
  useEffect(()=>{
    fetchFromAPI(`videos?.part=snippet,statistics&id=${id}`)
    .then((data)=> setVideoDetail(data.items[0]))
  })
  return (
    <div className='min-h-[95vh] text-white'>
     <Stack direction={{xs:'column',md:"row"}}>
      <Box flex={1}>
        <Box sx={{width:"100%",position:"sticky",top:"86px"}}>
          <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
          className="react-player" controls
          />
          <Typography>
            {videoDetail?.snippet?.title}
          </Typography>

        </Box>
      </Box>
     </Stack>
      
    </div>
  )
}

export default VideoDetail
