import React from 'react'
const RoomContext=React.createContext()

 class RoomProvider  extends React.Component{
constructor(){
    super()
    this.state={
    rooms:[],
    sortedRooms:[],
    featuredRooms:[],
    loading:true,
name:"marwa"
}}
render(){
    
    return(
       <RoomContext.Provider>
       
       
       {this.props.children}
    
       </RoomContext.Provider>
    )
}

}
const RoomConsumer=RoomContext.Consumer
export { RoomProvider,RoomContext,RoomConsumer}