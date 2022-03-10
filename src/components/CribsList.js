import React from 'react'
import "./styles/CribsList.css"
import Crib from "./Crib"

function CribsList({cribs}) {
  return (
   <section className="cribslist">
        <div className="cribslist-center">
           { cribs.map(crib=> {
                return <Crib key = {crib.id} crib={crib} />
            })}
        </div>
   </section>
  )
}

export default CribsList