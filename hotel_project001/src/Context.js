import React from 'react'
import items from './data'

const RoomContext=React.createContext();
 class RoomProvider  extends React.Component{
constructor(){
    super()
    this.state={
    rooms:[],
    sortedRooms:[],
    featuredRooms:[],
    loading:true,
    price:0,
    type:'all',
    capacity:1,
    minPrice:0,
    maxPrice:0,
    minSize:0,
    maxSize:0,
    breakfast:false,
    pets:false


}}
formatData=(items)=>{
let tempItems=items.map(item=>{
let id =item.sys.id  

let images=item.fields.images.map(image=>
    image.fields.file.url
    );
let room={...item.fields,id,images}
return room
    })
return tempItems
}

componentDidMount(){

  let rooms=this.formatData(items);
  let featuredRooms =rooms.filter(room=>room.featured===true)
  let maxPrice=Math.max(...rooms.map(item=>item.price))
  let maxSize=Math.max(...rooms.map(item=>item.size))
  this.setState({
rooms,sortedRooms:rooms,featuredRooms,loading:false,maxPrice,maxSize,price:maxPrice

  })
  
}
getRoom=slug=>{

    let tempRooms = [...this.state.rooms]
      const room = tempRooms.find(room=>room.slug===slug
        )
    
return room
}


handelChange=(event)=>{
const target =event.target
const name=event.target.name
const value=target.type === 'checkbox'?
target.checked:target.value

console.log("values by marwa",name,value)
this.setState(
 { [name]:value}
 ,this.filterRooms
)
}
filterRooms =()=>{
  let {price,
    type,rooms,
    capacity,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,}=this.state
    let tempRooms=[...rooms]
capacity=parseInt(capacity)
price=parseInt(price)
    // type filter
    if(type !=="all"){
      tempRooms=tempRooms.filter(room=>room.type==type)
    }


    // capacity filter

    if(capacity !==1){
      tempRooms=tempRooms.filter(room=>room.capacity>=capacity)
    }
    // price filter
tempRooms=tempRooms.filter(room=>room.price<=price)
   // size filter
   tempRooms=tempRooms.filter(room=>room.size>=minSize && room.size<=maxSize)
  // breakfast filter
  if(breakfast){
    tempRooms=tempRooms.filter(room=>room.breakfast=== true)
  }
   // pets filter
   if(pets){
    tempRooms=tempRooms.filter(room=>room.pets=== true)
  }
    // change state
    this.setState({sortedRooms:tempRooms})
}
render(){
    
    return(
      
       <RoomContext.Provider 
       value={{...this.state,
       getRoom:this.getRoom,
       handelChange:this.handelChange
       
       }}>
       
       
       {this.props.children}
    
       </RoomContext.Provider>
    )
}

}
const RoomConsumer=RoomContext.Consumer
export { RoomProvider,RoomContext,RoomConsumer}