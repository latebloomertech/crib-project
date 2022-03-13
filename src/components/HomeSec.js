import {useState} from 'react';
import '../App.css';
import { Button } from './Button';
import './styles/HomeSec.css';
import {Link} from "react-router-dom"

import EmailSection from './EmailSection.js';

function HomeSec() {

const [visible, setVisible] = useState(false)

const handleClick = () => {
  setVisible(!visible)
}

const handleModalClick = () => {
  setVisible(false)
}



  return (
    <div>
      <div>
        <EmailSection visible={visible} handleModalClick={handleModalClick}/>

      </div>
    <div className={`hero-container${visible ? "-blur" : ''}`}>
      <h1>MOST WATCHED</h1>
      <p> Scream</p>
    {/* </div>  */}
    <div className='hero-btns'>
       {/* <Link to = "/form">  */}
       <Button
          disabled={!visible}
          className='btns1'
          buttonStyle= 'btn--outline'
          buttonSize='btn--large'
          onClick={!visible ? handleClick : undefined}
          // onClick={handleClick}
        >
          PLAY
        </Button>
        {/* </Link> */}


        <Link
         to= "/cribs"
        >
              <Button
          disabled={!visible}
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
         INFO
        </Button>
        </Link>

        {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/ScrollTrigger.min.js"></script>
              */}
      </div>
    </div>
    </div>

  );
}

export default HomeSec;