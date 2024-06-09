import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <div className='banner'>
        <div className='content'>
            <h1 className='tittle'>Movie Name</h1>
            <div className='banner_battons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='discription'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate assumenda saepe placeat accusamus, blanditiis ipsam omnis voluptatum aperiam incidunt mollitia distinctio doloribus delectus voluptas tempore odio asperiores optio! Consequuntur, sit.</h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
