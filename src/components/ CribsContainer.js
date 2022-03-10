import React, { useState, useEffect }from 'react'
import CribsFilter from './CribsFilter'
import CribsList from './CribsList'
import Footer from './Footer'
import HeroSection from './HeroSection'

function  CribsContainer({cribs, handleAdd}) {
  

  return (

   <>
   <HeroSection/>
    <CribsFilter handleAdd={handleAdd}/>
    <CribsList cribs={cribs}/>
   </>
  )
}

export default  CribsContainer