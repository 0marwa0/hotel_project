import React from 'react'
import {Link }from 'react-router-dom'
import Hero from '../Components/Hero'
import Banner from '../Components/Baner'
import Services from '../Components/Services'
import '../App.css';
class Home extends React.Component{
constructor(){
    super()
    this.state={

    }
}
render(){
    return(
        <>
        
      <Hero Hero="defaultHero">
         <Banner
         title="welcom to xoxe hotel"
         subTitle="will find all your need in this site the berfect place with berfect pric"
         >
          <Link to="/Room" className="btn-primary"> OR Rooms</Link>
        
         </Banner>
      </Hero>
        <Services/>
        </>
    )
}

}

export default Home