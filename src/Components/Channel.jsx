import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import {ChannelCard,Videos} from "./"
import { fetchFromAPI } from '../Utilities/FetchFormApi'

const ChannelDetail = () => {
  const [channelDetail,setChannelDetail] = useState(null);
  const [videos,setVideos] = useState([]);

  const {id} = useParams();

  useEffect(()=>{
    fetchFromAPI(`channels?.part=snippet&id=${id}`)
    .then((data)=> setChannelDetail(data?.items[0]))

    fetchFromAPI(`search?.channelId=${id}&part=snippet&order=date`)
    .then((data)=> setVideos(data?.items))
  },[id]);
  // console.log(channelDetail,videos);
  return (
    <div className='text-white min-h-[95vh] '>
      <div className='flex flex-col items-center'>
        <div className='w-[100%] bg-gradient-to-r from-fuchsia-600 to-pink-600 h-[300px] '></div>
        <ChannelCard channelDetail={channelDetail} marginTop="-93px"/>
      </div>
      <Box display="flex" p="2">
      <Box sx={{mr:{sm:"100px"}}}/>
        <Videos videos={videos}/>
        </Box>
      
    
    </div>
  )
}

export default ChannelDetail
