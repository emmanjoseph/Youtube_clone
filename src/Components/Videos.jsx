import React from 'react'
import { Stack,Box } from '@mui/material';
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';

const Video = ({videos}) => {
  // console.log(videos);
  return (
   
      <div className='w-[100%] flex flex-wrap gap-4'>
        {videos.map((item,index)=>{
          return <Box key={index}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </Box>
        })}

      </div>
    
  )
}

export default Video
