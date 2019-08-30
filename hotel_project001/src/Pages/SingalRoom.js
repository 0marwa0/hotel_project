import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'
//import defaultBcg from '../images/'
import Hero from '../Components/Hero'
import Banner from '../Components/Baner'
import {RoomContext}from '../Context'
class SingalRoom extends React.Component{
constructor(props){
     
    super(props)
    this.state={
    slug:this.props.match.params.slug
    
    }
//console.log(this.state.slug)

  
}
componentDidMount(){

}
render(){
  
  
    const {featuredRooms}=this.context
  const room =featuredRooms.find(room=>room.slug===this.state.slug);
  //let name=room.map(room=>(room.name))
    console.log(room,'big nooop!')
    
    return(
<>
        <Hero Hero="roomsHero">
        <Banner
        title='f'
        subTitle=""
        >
         <Link to="/Room" className="btn-primary"> OR Rooms</Link>
       
        </Banner>
     </Hero>
        </>
    )
}

}
SingalRoom.contextType=RoomContext

export default SingalRoom
