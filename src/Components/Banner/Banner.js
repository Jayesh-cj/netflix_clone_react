import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import { API_KEY,imageUrl } from '../../constants/constants'

function Banner() {
  
  const [movie, setMovie] = useState()

  useEffect(() => {
    const number = Math.floor(Math.random() * 21);
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
      setMovie(response.data.results[number])
    })
  }, [])


  return (
    <div className='banner' style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ''})`}}>
        <div className='content'>
            <h1 className='tittle'>{movie ? movie.title : ''}</h1>
            <div className='banner_battons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='discription'>{movie ? movie.overview : ''}</h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
