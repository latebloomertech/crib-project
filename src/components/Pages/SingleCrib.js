import React from 'react'
import {useParams} from "react-router-dom"
import Footer from '../Footer'
import "../styles/singlecrib.css"

function SingleCrib({cribs}) {
 const params = useParams()
console.log(params.id)


 const clickedCrib = cribs.filter(crib => {
   return crib.id == params.id
 })

 console.log(clickedCrib)

 const singleCrib = clickedCrib.map(crib => {
   return       <section className="single-crib">
   <div className="single-crib-images">
       {crib.images.map( image => <img src={image} />)}
   </div>
   <div className="single-crib-info">
     <article className="desc">
       <h3>details</h3>
       <p>{crib.location}</p>
       <p>{crib.area}</p>
       <p> {crib.bed}</p>
       <p> {crib.bath}</p>
       <p>{crib.price}</p>


     </article>
   </div>
 </section>
 })
  return (
    <>
      {singleCrib}
      <Footer/>
    </>
  )
}

export default SingleCrib