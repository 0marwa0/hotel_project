import React from 'react'

import image from '../images/gif/loading-arrow.gif'
 class Loading extends React.Component{
constructor(){
    super()
    this.state={
   
}}




render(){
    
    return(
      <div className="loading">
        <h4>Data loading</h4>
        <img src={image}/>
      </div>
    )
}

}
export  default Loading