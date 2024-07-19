import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

  const {id} = useParams();
  const navigate = useNavigate();


  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: ""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5M2E3YWE5YjI0ZjYyMDcwNDZlODcyODRmMjRjOGE0YiIsIm5iZiI6MTcyMTMwMTY4Ny4zMzA4MDYsInN1YiI6IjY2OGNmZDc3NDg3MWQyMWUwZTVjMDJmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-sLG3EiVPQqqeZr2gANvYZe7iaSOb7lz6MGsrz_Drlk'
    }
  };
  
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results[0]))
    .catch(err => console.error(err));
  },[])

  

  return (
    <div className='player'>
        <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-2)}}/>
        <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0' allowFullScreen></iframe>
        <div className="player-info">
          <p className='p1'>{apiData.published_at.slice(0, 10)}</p>
          <p className='p2'>{apiData.name}</p>
          <p className='p3'>{apiData.type}</p>
        </div>
    </div>
  )
}

export default Player