import React from 'react'

import{ RoomContext, RoomConsumer }from '../Context'
import Loading from './Loading';
import Room from '../Components/Room'

import Title from './Title'
class FeatuerdRooms extends React.Component{
 
constructor(){
    super()
    this.state={

}}
render(){
let {loading,featuredRooms:rooms}=this.context
 rooms=rooms.map(room=>{
    return <Room key={room.id} room={room}/>
})
console.log(this.context.featuredRooms)
  
    return(
       <>
       <section className="featured-rooms">

       
       <Title title="featuerd rooms"/>
          
          <div className="featured-rooms-center">
           {loading?<Loading/>:rooms}
            </div>
             </section>
       </>
    )
}

}
FeatuerdRooms.contextType=RoomContext
export default FeatuerdRooms