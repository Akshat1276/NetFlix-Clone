import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'

const Player = () => {

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
    fetch('https://api.themoviedb.org/3/movie/1022789/videos?language=en-US', options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));
  },[])

  

  return (
    <div className='player'>
        <img src={back_arrow_icon} alt="" />
        <iframe width='90%' height='90%' src='https://www.youtube.com/embed/SHT0y9Gq_rk' title='trailer' frameBorder='0' allowFullScreen></iframe>
        <div className="player-info">
          <p>Published Date</p>
          <p>Name</p>
          <p>Type</p>
        </div>
    </div>
  )
}

export default Player