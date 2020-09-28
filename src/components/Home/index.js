import React from 'react';
import {useSelector} from 'react-redux';
import Calendar from '../Calendar';
import PopUp from '../PopUp';
import './home.scss';

export default function Home(){
  const datePassed = useSelector(state => state.calendarDataSender);

  return ( 
    <div className="Home" style={{backgroundImage:'url("./assets/img/main.jpg")'}}>
      {datePassed.length > 0? <PopUp />:<></>}
      <div className="Home__text">
        <h1 className="Home__title">Choose the day for the <span>meeting</span></h1>
        <p className="Home__paragraph">We encourage you to book your <br/>appointment online.<br/>This will save you time.</p>
      </div>
      <div className="Home__calendar">
        <Calendar />
      </div>
    </div>
  )
}
