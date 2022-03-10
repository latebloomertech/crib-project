import React, {useState} from 'react'
import "./styles/CribsList.css"
// import Crib from "./Crib"


function CribsList() {
     const [comment, setComment] = useState("")
     const [rating, setRating] = useState("")


     function handleSubmit(e) {
          e.preventDefault();
        
     fetch ("http://localhost:9292/reviews", {
          method: 'POST',
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({
          comment:comment,
          star_rating:rating
     })
     }).then(response => response.json())
     .then(newReview=>(newReview))
     setComment('')
     setRating('')
}

  return (
     <div className="comments">
       <h3 className="comments-title">Comments</h3>
       <div className="comment-form-title">Write comment</div>
       <form onSubmit={handleSubmit}>
       <input value={comment} onChange= {(e)=>setComment(e.target.value)}placeholder=""/>
       <input value= ""  placeholder=""/>
       <input value =""  placeholder=""/>
       <input value =""  placeholder=""/>
       <input value =""  placeholder=""/>
       <div className="button">
        <button  >SUBMIT</button>
        </div>


       </form>

     </div>
  )
}

export default CribsList