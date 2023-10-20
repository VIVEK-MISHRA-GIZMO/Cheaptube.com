import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material'
import Videos from './Videos';
import { fetchFromApi } from '../fetchFromApi';
import { useParams } from 'react-router-dom';
const SearchFeed = () => {
  const{searchTerm}=useParams()
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm]);
  return (
    <Box p={2} sx={{ overflowY: 'auto', height: "90vh", flex: 2 }}>
      <Typography variant='h4' fontWeight="bold" mb={2}
        sx={{ color: 'white' }}>
      Search Results for {searchTerm} Videos <span style={{ color: '#F31503' }}>Videos</span>
      </Typography>
      <Videos videos={videos} />
    </Box>

  )
}

export default SearchFeed