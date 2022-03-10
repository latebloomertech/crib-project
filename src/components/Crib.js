import React, {useState} from 'react'
import defaultImage from '../images/room-1.jpeg'
import "./styles/Crib.css"
import {Link} from "react-router-dom"

function Crib({crib}) {
    const {location, images, price, area, desc,} =crib
    const [toggle, setToggle]= useState(true)

    function handleToggle(){ setToggle(!toggle) }

  return (
   <article className="crib">
       <Link 
        to={`crib/${crib.id}`}
       
       >   

       <div className="img-container" onclick={handleToggle}>
           <div className="sliders">
            <div className="slides">
                    <div id="slide-1">
                    <img id= "itemimg" src= {images[0] || defaultImage} alt="A crib"/>
                    </div>
                    <div id="slide-2">
                    <img src={images[1] || defaultImage} alt="A crib"/>
                    </div>
                    <div id="slide-3">
                    <img src={images[2] || defaultImage} alt="A crib"/>
                    </div>
                </div>
           </div>

           <div className="price-top">
               <h6> {price}</h6>
               <p>per month</p>
           </div>
       </div>
        </Link>
        <div className="descriptions">
            <p>{location}</p>
            <br/>
        </div>
   </article>
  )
}

export default Crib

