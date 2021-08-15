import React from 'react'
//import classes from "./BackgroundVideo.module.css"
import Video from "../assets/Perros.mp4"
import Narvbar from './Narvbar'

export default function VideoBackground() {
    return (
        <div className='container' style={{margin:'0',
        
        }}>
        <video
          style={{ 
            position:'fixed',
            maxWidth:'100%',
            minHeight:'100%',  
            top:'0%',
            left:'0%',

            filter: `blur(0px)`, WebkitFilter: `blur(0px)`,
            zIndex:-1  
        }}
          autoPlay="autoplay"
          loop="loop"
          muted
          // ref={video}
          id="video-id"
          className='video' >
                 
         
          {/* TODO make it accept multiple media types */}
          <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        </div>
    )
}
