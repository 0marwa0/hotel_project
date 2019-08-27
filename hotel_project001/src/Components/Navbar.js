import React from 'react';
import '../App.css'
import {Link} from 'react-router-dom'
import { FaAlignRight } from 'react-icons/fa';
class Navbar extends React.Component {

    constructor(){
  
        super()
        this.state={
isOpen:false
        }
    }
    
HandelTaggle=()=>{
    this.setState({isOpen:!this.state.isOpen})
    console.log("call!!!")
}
    render(){

  return (
   <>
  <div className="navbar">
  
         <div className="nav-center">     
             <div className="nav-header">
  
               <Link to="/">
               
               logg
               
               </Link>
                      <button 
                      className="nav-btn"
                      onClick={this.HandelTaggle}
                      
                      >

                      <FaAlignRight  className="nav-icon"/>
                     </button>
                  
                    </div>

                          <ul className={this.state.isOpen ? "nav-links show-nav":"nav-links"}>
                              <li>
                            <Link to="/">Home</Link>
                              </li>
                              <li>
                            <Link to="/Room">Roomes</Link>
                              </li>
                          </ul>
                     

            
        </div>
  </div>
   </>
  );
}}

export default Navbar;
