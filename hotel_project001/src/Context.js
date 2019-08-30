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
  
  this.setState({
rooms,sortedRooms:rooms,featuredRooms,loading:false

  })
  
}
getRoom=(slug)=>{

    let tempRooms = [...this.state.rooms]
      const room = tempRooms.find(room=>room.slug===slug);
     
return room
}
render(){
    
    return(
      
       <RoomContext.Provider 
       value={{...this.state,
       getRoom:this.getRoom
       
       }}>
       
       
       {this.props.children}
    
       </RoomContext.Provider>
    )
}

}
const RoomConsumer=RoomContext.Consumer
export { RoomProvider,RoomContext,RoomConsumer}