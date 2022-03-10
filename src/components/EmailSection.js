import React from 'react';
import "./styles/EmailSection.css";


function EmailSection ({visible, handleModalClick}) {



    return (
      
      <div class="email" style={{display: visible ? "block" : "none"}} >
            
            
            <div className="email-content" >
                <h1>FILL OUT THE FORM</h1>
                <div className="form-container">
                <form >
                    <div className="form-wrap">
                    <label for="email">
                        <input type="First Name" className="input-field" placeholder="Enter your First Name" id="name">
                        </input>
                        <input type="Last Name" className="input-field" placeholder="Enter your Last Name " id="last name">
                        </input>
                        <input type="email" className="input-field" placeholder="Enter your email" id="email">
                        </input>
                        <input type="phone" className="input-field" placeholder="Enter your Phone Number" id="number">
                        </input>
                    </label>
                    {/* <button class="button" type="submit"></button> */}
          
                    </div>
                    <button className="button" type="submit" onClick={handleModalClick}>SUBMIT YOUR APPLICATION</button>
                </form>
            </div>
        </div>
        </div>
   
  
   
    );
}

export default EmailSection;
