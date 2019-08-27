import React from 'react'
import Hero from '../Components/Hero'
import Banner from '../Components/Baner'
import {Link }from 'react-router-dom'

class Room extends React.Component{
constructor(){
    super()
    this.state={

    }
}
render(){
    return(
<>
      <Hero Hero="roomsHero">
         <Banner
         title="Our Rooms"
         
         >
          <Link to="/" className="btn-primary">HOME</Link>
        
         </Banner>
      </Hero>
        
        </>
    )
}

}

export default Room