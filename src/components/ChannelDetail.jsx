import React from 'react'
import { useState,useEffect } from 'react'
import {useParams} from 'react-router-dom'
import {Box} from '@mui/material'
import { fetchFromApi } from '../fetchFromApi'
import ChannelCard from './ChannelCard'
import Videos from './Videos'

const ChannelDetail = () => {
  const{id}=useParams()
  const[ChannelDetail,setChannelDetail]=useState(null)
  const[videos,setVideos]=useState([])

  useEffect(()=>{
    fetchFromApi(`channels?part=snippet&id=${id}`).then((data)=>
    setChannelDetail(data?.items[0]))
    fetchFromApi(`search?channelId=${id}&part=snippet%2Cid&order=date`).then((data)=>
    setVideos(data?.items))

  },[id])
  return (
    <Box minHeight='95vh'>
        <Box>
          <div 
    style={{
      zIndex:10,
      height:'300px',
      background: 'linear-gradient(90deg, rgba(68,0,255,1) 0%, rgba(255,0,224,1) 53%, rgba(0,212,255,1) 100%)'}}/>
       <ChannelCard channel={ChannelDetail}
       marginTop='-133px'/>
        </Box>
        <Box p={2} display="flex">
      <Box sx={{ mr: { sm: '100px' } }}/>
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail