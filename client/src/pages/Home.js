import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from '../components/Card.js';
import axios from 'axios'
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap:wrap;
`

const Home = ({type}) => {
  const [videos,setVideos] = useState([]);

  useEffect(()=>{
    const fetchVideos = async()=>{
      const res = await axios.get(`http://localhost:8800/api/videos/${type}`);
      setVideos(res.data);
    }
    fetchVideos(); //Called function because you cannot call async functions in useEffect.
  },[type])
  return (
    <Container>
      {videos.map((video)=>(
        <Card key={video._id} video={video}/>
      ))}
      
    </Container>
  )
}

export default Home
