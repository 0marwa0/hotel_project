import React from 'react';
import '../App.css'
 import Room  from './Room'
class RoomList extends React.Component {

    constructor(){
  
        super()
        this.state={

        }
    }
    

    render(){
let rooms=this.props.rooms
if(rooms.length==0){ return <p>No rooms exiet with this featcher</p>}else{
  return (
    
   <div>

   <section className="roomslist">
      <div className="roomslist-center">
            {rooms.map(item=>(

                <Room room={item}/>
            
            ))} 
    </div>
            </section>  }                                  
   </div>
  );}
}}

export default RoomList;
