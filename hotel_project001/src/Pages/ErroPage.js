import React from 'react'
import Hero from '../Components/Hero'
import Banner from '../Components/Baner'
import {Link }from 'react-router-dom'
class ErrorPage extends React.Component{
constructor(){
    super()
    this.state={
    }
}
render(){
    return(
<Hero Hero="defaultHero">
         <Banner
         title="404"
         subTitle="Page not found"
         >
       
       <Link to="/" className="btn-primary"> RETURN HOME</Link>
        
         </Banner>
      </Hero>
        
    )
}

}

export default ErrorPage