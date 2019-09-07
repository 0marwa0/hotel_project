import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'
//import defaultBcg from '../images/'
import Hero from '../Components/Hero'
import Banner from '../Components/Baner'
import {RoomContext}from '../Context'
import defaultBcg from '../images/room-1.jpeg'
import StyledHero from '../Components/StyledHero'
class SingalRoom extends React.Component{
constructor(props){
     
    super(props)
    this.state={
    slug:this.props.match.params.slug,
    defaultBcg
    
    }
console.log(this.state.slug)

  
}
componentDidMount(){

}
render(){
  
  
    const {featuredRooms,getRoom}=this.context
  const room =featuredRooms.find(room=>room.slug===this.state.slug);


let {name,pets,price,size,breakfast,capacity,images,description,extras} =room
  
    let [mainImg,...defaultImg]=images
    return(
<>
      <StyledHero img={mainImg|| this.state.defaultBcg}>
        <Banner
        title={name}
        subTitle=""
        >
         <Link to="/Room" className="btn-primary"> OR Rooms</Link>
       
        </Banner>
    
    </StyledHero>
   <section className="single-room">
   <div className="single-room-images">
   {defaultImg.map((item,index)=>(<img key={index} src={item} alt={name}/>))}
   </div>


                
            <div className="single-room-info">
            <article className="desc">
                <h3> details</h3>
                <p> {description}</p>
                </article>
                <article className="info">
                <h3>info</h3>
                <h6>price : ${price}</h6>
                <h6>size : ${size} SQFT</h6>
                <h6> Max capsity : {""} {
                    capacity >1 ? `${capacity} people`:`${capacity} person`
                }</h6>
                <h6> {pets?"pets allowed":"no pets"}</h6>
                <h6> {breakfast&&"free breakfast included"}</h6>
                </article>
                </div>
   </section>
   <div className="room-extras">
   <h6>extras</h6>
   <ul className="extras">
    {extras.map((item,index)=><li key={index}>- {item}</li>)}
   </ul>
   </div>
        </>
    )
}

}
SingalRoom.contextType=RoomContext

export default SingalRoom
