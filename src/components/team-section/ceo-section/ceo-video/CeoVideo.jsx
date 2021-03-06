import React from 'react'
import './CeoVideo.css'


const CeoVideo = () => {
  return (
    <div>
      <iframe
        className="ceo-video"
        title="ceo-video"
        width="400"
        height="210"
        src="https://www.youtube.com/embed/UQ2-6gk9Szs"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen> 
      </iframe>
    </div>
  )
}

export default CeoVideo
