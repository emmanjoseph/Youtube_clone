import React from 'react'
import { Link } from 'react-router-dom'
import { Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoThumbnailUrl,demoVideoTitle,demoVideoUrl,demoChannelTitle,demoChannelUrl } from '../Utilities/Constants'

const VideoCard = ({video:{id :{videoId},snippet}}) => {
  // console.log(videoId,snippet);
  return (
    <div className='w-full md:w-[250px]' >
      <Link to={videoId ?`/video/${videoId}`: demoVideoUrl} className='rounded-xl'>
      {/* <img 
      src={snippet?.thumbnails?.high?.url}
      alt={snippet?.title}
      className='w-full rounded-xl'
      /> */}
      <img src={snippet?.thumbnails?.high.url} alt={snippet?.title} style={{borderRadius:"20px"}} />
      </Link>
      <div className='text-[14px]'>
        <Link to={videoId ?`/video/${videoId}`: demoVideoUrl}>
          <Typography variant='subtitle2' fontWeight="semibold" color="#fff">
            {snippet?.title.slice(0,60) || demoVideoTitle}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ?`/channel/${snippet.channelId}`: demoVideoUrl}>
          <Typography variant='subtitle3' fontWeight="semibold" color="gray">
            {snippet?.channelTitle.slice(0,60) || demoChannelTitle}
            <CheckCircle sx={{fontSize:12 ,ml:"5px"}}/>
          </Typography>
        </Link>
      </div>
    </div>
  )
}

export default VideoCard
