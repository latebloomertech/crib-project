import React, {useState, useEffect} from 'react'
import CribsContainer from '../ CribsContainer';
import Footer from '../Footer';




function Cribs({cribs, handleAdd}) {




  return (
   <>
      <CribsContainer cribs={cribs} handleAdd={handleAdd}/>
      <Footer/>
   </>
  )
}

export default Cribs