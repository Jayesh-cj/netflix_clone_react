import React, { useEffect, useState } from 'react'
// import card from '../../Imags/card-image.jpg'
import './RowPost.css'
import axios from '../../axios'
import { imageUrl } from '../../constants/constants'

function RowPost(props) {

  const [movie, setMovie] = useState([])

  useEffect(() => {
    axios.get(props.url).then((response) => {
      // console.log(response.data);
      setMovie(response.data.results)
    })
  }, [props.url])

  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
          {movie.map((obj) => 
              <img className={props.isSmall ? 'small-poster' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="" />
          )}
        </div>
    </div>
  )
}

export default RowPost
