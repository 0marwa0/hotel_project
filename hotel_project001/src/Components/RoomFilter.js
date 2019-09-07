import React from 'react';
import '../App.css'
import {RoomContext} from '../Context'
import {useContext} from 'react'
import Title from '../Components/Title'
// get all unique values
// const getUnique = (items,value)=>{
//   return [...new Set(x.map(x=> x[value]))];
// }
function RoomFilter (rooms){
const context =useContext(RoomContext);



const {handelChange, price,
  type,
  capacity,
  minPrice,
  maxPrice,
  minSize,
  maxSize,
  breakfast,
  pets,} =context

 // get unique types 
  // const types = getUnique(rooms,'type')
  // // add all 
  // types =['all',...types]
  // types.map((item,index)=>
  //   <option value={item}key={index}>

  //     {item}
  //   </option>
  //   )
  let fekeOption=['all','single']
  let getFekeOption =()=>console.log(fekeOption)
    { fekeOption.map(item=> <option value={fekeOption}>
          {item}
        
      </option>)}
  
  return (
   <>
 <section className="filter-container">
    <Title title="search rooms"/>
    <form className="filter-form">
      {/*select tpye */}
      <div className="form-group">
          <label htmlFor="type">room type</label>
              <select name="type" id="type"
          className="form-control"
          onChange={handelChange}
          >
          <option value="all">all</option>
            <option  value="single">single</option>
            <option value="mango">Mango</option>
          </select>
      </div>
    {/* end of select tpye */}

    {/*gestes */}
    <div className="form-group">
      <label htmlFor="capacity">Gestes</label>
          <select name="capacity" id="capacity"
      className="form-control"
      onChange={handelChange}
      >
      <option value="1">1</option>
        <option selected value="2">2</option>
        <option value="3">3</option>
      </select>
      </div>
      {/*  end gestes */}
     {/* room price */}

     <div className="form-group">
      <label htmlFor="price">room price ${price}</label>
        <input type="range" id="price" 
        onChange={handelChange} name="price"
        max={maxPrice} min={minPrice}
        className="form-control"/>
        
        
     </div>
     {/* end room price */}
      {/* room size */}
      <div className="form-group">
      <label htmlFor="size">room size</label>
        <input 
        type="number"
         id="size" 
        onChange={handelChange}
         name="minSize"
        value={minSize}
        className="size-input"/>
        <input 
        type="number" 
        id="size" 
        onChange={handelChange} 
        name="maxSize"
        value={maxSize}
        className="size-input"/>
        </div>
       {/* room size end */}
        {/* extras*/}

        <div className="form-group">
        <div className="single-extra">
        <input
          id="breakfast" 
          type="checkbox"
          onChange={handelChange}
          name="breakfast"
          checked={breakfast}
        />

              <label htmlFor="breakfast"> breakfast</label>

        <input id="pets" 
        type="checkbox"
        onChange={handelChange}
         name="pets"
         checked={pets}
        />
        <label htmlFor="pets"> pets</label>
        </div>
        
        </div>
        {/* end extras*/}


      </form>
      
      </section>
                                            
   </>
  );
}

export default RoomFilter;
