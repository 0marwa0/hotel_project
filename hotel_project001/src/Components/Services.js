import React from 'react'

import {Link }from 'react-router-dom'
import Title from './Title'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer}from "react-icons/fa"

class Services extends React.Component{
constructor(){
    super()
    this.state={

services:[
    {title:"services one"
    ,icon:<FaCocktail/>
    ,info:"this section is taking about sertein topic"}
    , {title:"services one"
    ,icon:<FaHiking/>
    ,info:"this section is taking about sertein topic"}
    , {title:"services one"
    ,icon:<FaShuttleVan/>
    ,info:"this section is taking about sertein topic"}
    ,{title:"services one"
    ,icon:<FaBeer/>
    ,info:"this section is taking about sertein topic"}
]

}}
render(){
    let content=this.state.services.map((item,index)=>
    
              <article key={index} className="service">
 
                  <span>{item.icon}</span>
                  <h6>{item.title}</h6>
                  <p>{item.info}</p>
              </article>
 
    
     )
    return(
         <section className="services">
   <Title title="Services"/>
   <div className="services-center">
   {content}
   </div>
       </section>
    )
}

}

export default Services