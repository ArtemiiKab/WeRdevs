import React, {useState} from 'react';
import Calendar from '../Calendar';
import PopUp from '../PopUp';
import './home.scss';

export default function Home(){
  const[isClicked, setClicked] = useState(false);
  const[dateInPopup, setDateInPopup] = useState([]);

    return( 
        <div className="Home" style={{backgroundImage:'url("./assets/img/main.jpg")'}}>
          {isClicked?<PopUp setClicked={setClicked} datePassed={dateInPopup} />:<></>}
          <div className="Home__text">
              <h1 className="Home__title">Choose the day for the meeting</h1>
              <p className="Home__paragraph">We encourage you to book your <br/>appointment online.<br/>This will save you time.</p>
          </div>
          <div className="Home__calendar">
              <Calendar setClicked={setClicked} setDateInPopup={setDateInPopup}/>
          </div>
        </div>
    )
}