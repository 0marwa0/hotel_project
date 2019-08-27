import React from 'react'
import Hero from '../Components/Hero'
import Banner from '../Components/Baner'
import {Link }from 'react-router-dom'
import '../App.css';
import { from } from 'rxjs';
function Title({title}){
    return(
       <div className="section-title">
       <h4>
           {title}
       </h4>
       <div/>
       </div>
    )
}



export default Title