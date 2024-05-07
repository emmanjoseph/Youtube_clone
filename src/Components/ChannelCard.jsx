import React from 'react'
import { CheckCircle } from '@mui/icons-material'
import { CardMedia, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../Utilities/Constants'
const ChannelCard = ({channelDetail,marginTop}) => {
  return (
    <div className='shadow-none rounded-[20px]'
    style={{marginTop:marginTop}}
    >
     <div className='flex items-center justify-center w-[356px] md:w-[320px]'>
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
       <div className='flex items-center flex-col justify-center text-center text-[#fff] pt-2'>
        <CardMedia
        image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture} alt={channelDetail?.snippet?.title}
        sx={{width:"180px",height:"180px",borderRadius:"50%",mb:2,border:"1px solid #e3e3e3"}}
        />
          <Typography variant='h6'>
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{fontSize:14 ,ml:"5px"}}/>
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
            </Typography>
          )}
       </div>
      </Link>
     </div>
    </div>
  )
}

export default ChannelCard
