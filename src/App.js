
import './App.css';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import {Box} from '@mui/material'
import {Navbar,Feed,VideoDetail,ChannelDetail,SearchFeed} from './components/index'



function App() {
  return (
    <Router>
      <Box sx={{backgroundColor:'#000'}}>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Feed/>}/>
          <Route path="/video/:id" element={<VideoDetail/>}/>
          <Route path="/channel/:id" element={<ChannelDetail/>}/>
          <Route path="/search/:searchTerm" element={<SearchFeed/>}/>
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
