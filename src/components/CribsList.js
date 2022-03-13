import React, {useState, useEffect} from 'react'
import "./styles/CribsList.css"
// import Crib from "./Crib"


function CribsList() {
     const [comment, setComment] = useState("")
     const [rating, setRating] = useState("")
     const [allReviews, setAllReviews] = useState([])

     useEffect(() =>{
          fetch("http://localhost:9292/reviews")
          .then((response) =>response.json())
          .then(data =>setAllReviews(data))
        }, [])

        function handleAdd(newReview){
          setAllReviews(allReviews)
        }

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
     .then(newReview=>handleAdd(newReview))
     setComment('')
     setRating('')

     // function handleClick() {
     //      fetch(`http://localhost:3000/Itinerary/${id}`, {
     //          method: 'DELETE'
     //      }).then(res => res.json())
     //      .then(() => deleteTrip(id))
     //  }

     // function deleteTrip(id) {
     //      const updatedData = allReviews.filter((review) => {
     //        if (review.id === id) {
     //          return null
     //        } else {
     //          return review
     //        }
     //      })
     //      setAllReviews(updatedData)
     //    }

}
// console.log(allReviews[0].comment)
     const allReviewsList = allReviews.map(review => {
          return <span>{review.comment}</span>
     })

  return (
       <>
       <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"/>
<div class="container">
<div class="be-comment-block">
	<h1 class="comments-title">Comments </h1>
	<div class="be-comment">
		<div class="be-img-comment">
			<a href="blog-detail-2.html">
				<img src="https://i.imgur.com/xELPaag.jpg" alt="" class="be-ava-comment"/>
			</a>
		</div>
		<div class="be-comment-content">

				<span class="be-comment-name">
					<a href="blog-detail-2.html">Jane Doe</a>
					</span>
				<span class="be-comment-time">
					<i class="fa fa-clock-o"></i>
					March 11, 2022
				</span>

			<p class="be-comment-text">
				{allReviewsList}
			</p>
		</div>
	</div>

	<form class="form-block" onSubmit={handleSubmit}>
		<div class="row">
			<div class="col-xs-12 col-sm-6">
				<div class="form-group fl_icon">
					<div class="icon"><i class="fa fa-user"></i></div>
					<input class="form-input" type="text" placeholder="Your name"/>
				</div>
			</div>
			<div class="col-xs-12 col-sm-6 fl_icon">
				<div class="form-group fl_icon">
					<div class="icon"><i class="fa fa-envelope-o"></i></div>
					<input class="form-input" type="text" placeholder="Star Rating (1-4)"/>
				</div>
			</div>
			<div class="col-xs-12">
				<div class="form-group">
					<textarea value={comment} onChange= {(e)=>setComment(e.target.value)} class="form-input" required="" placeholder="Your comment"></textarea>
				</div>
			</div>
			<button class="btn btn-primary pull-right">SUBMIT</button>
               <button class="btn btn-primary pull-right">DELETE</button>

		</div>
	</form>
</div>
</div>
</>
  )
}

export default CribsList

{/* <h3 className="comments-title">Comments</h3>
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
       </form> */}