import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'
import Hero from '../Components/Hero'
import Banner from '../Components/Baner'
import {RoomContext}from '../Context'
import { from } from 'rxjs';
 class Room extends React.Component{
constructor(){
    super()
    this.state={
   
}}




render(){
   const {name,slug,images,price}=this.props.room
    return(
    <article className="room">
      <div className="img-container">
        <img src={images[0] }alt="single room0"/>
        <div className="price-top">
            <h6>${price}</h6>
            <p>per night</p>
         </div>
         <Link to ={`/Room/${slug}`} className="btn-primary room-link">
         Features
         </Link>
      
      <p className="room-info">{name}</p>
</div>
    </article>
    )
}

}
export  default Room