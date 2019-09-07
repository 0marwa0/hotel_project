import React from 'react';
import '../App.css'
import RoomList from './RoomList'
import RoomFilter from'./RoomFilter'
import {RoomConsumer} from '../Context'
import Loading from'../Components/Loading'
export default function RooContainer() {
  return (
   <>
<RoomConsumer >
{

  value=>{
      console.log(value,Loading);
      let {loading,sortedRooms,rooms}=value
      if(loading){
          return <Loading/>
      }
    return (
    
    <>
    <RoomFilter rooms={rooms}/>

    <RoomList rooms={sortedRooms}/>
        </>
        )
     
    
    }

      
  
}
</RoomConsumer>

                                                                                              
   </>
  );
}


