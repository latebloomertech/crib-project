import React, {useState} from 'react'
import "./styles/CribsFilter.css"

function CribsFilter({handleAdd}) {
  const [location, setLocation] = useState("")
  const [area, setArea] = useState("")
  const [bed, setBed] = useState("")
  const [bath, setBath] = useState("")
  const [price, setPrice] = useState("")
  const [image1, setImage1] = useState("")
  const [image2, setImage2] = useState("")
  const [image3, setImage3] = useState("")
  const [image4, setImage4] = useState("")
  
  function handleSubmit(e){
    e.preventDefault();

    fetch("http://localhost:3000/cribs", {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      location: location,
      area: area,
      bed: bed,
      bath: bath,
      price: price,
      images: [image1, image2, image3, image4]
    })
    
    }).then(response => response.json())
    .then(newCrib=>handleAdd(newCrib))
    setLocation('')
    setArea('')
    setBed('')
    setBath('')
    setPrice('')
    setImage1('')
    setImage2('')
    setImage3('')
    setImage4('')
  }

  return (
    <>
    <div className="list-container">
    <div className="name">
     NEW RELEASES
    </div>
    
     <form onSubmit={handleSubmit} >
        {/* <div className="cribs">
          <input value = {location} onChange= {(e)=>setLocation(e.target.value)} placeholder="Location" />
          <br/>
          <input value ={area} onChange= {(e)=>setArea(e.target.value)} placeholder="Area"/>
          <br/>
          <input value ={bed}  onChange= {(e)=>setBed(e.target.value)} placeholder="Beds"/>
          <br/>
        <input  value ={bath}  onChange= {(e)=>setBath(e.target.value)} placeholder="Bath"/>
          <br/>
          <input value ={price} onChange= {(e)=>setPrice(e.target.value)} placeholder="Price"/>
          <br/>
          <input  value ={image1} onChange= {(e)=>setImage1(e.target.value)} placeholder="Image-1"/>
          <input  value ={image2} onChange= {(e)=>setImage2(e.target.value)} placeholder="Image-2"/>
          <input  value ={image3} onChange= {(e)=>setImage3(e.target.value)} placeholder="Image-3"/>
          <input  value ={image4} onChange= {(e)=>setImage4(e.target.value)} placeholder="Image-4"/>
        </div> */}
        {/* <div className="button">
        <button>SUBMIT</button>
        </div> */}
        
      </form>
</div>
    </>
  )
}

export default CribsFilter