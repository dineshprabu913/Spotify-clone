import React from 'react'
import background from '../assets/spotify-v.mp4'
// import background from '../assets/background-intro.mp4'

const Opening = () => {
  return (
    <div className='h-screen bg-black flex items-center justify-center'>
        <video className='w-[75%] object-cover mix-blend' src={background} preload='auto' autoPlay loop muted></video>
    </div>
  )
}

export default Opening