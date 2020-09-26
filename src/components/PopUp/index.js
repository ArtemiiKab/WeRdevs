import React from 'react';
import './popup.scss';

export default function PopUp({setClicked, datePassed}){
  console.log(datePassed)

  return (
    <div className="Popup">
      <div className="Popup__shadow"></div>
      <div className="Popup__container">
        <button
          className="Popup__btn"
          onClick={()=>setClicked(false)}
        >
          X
        </button>
        <div className="Popup__labels">
          <div className="Popup__label-box">
            <label htmlFor="month">Month</label>
            <input type="text" id="month" value={datePassed[1]}/>
          </div>
          <div className="Popup__label-box">
            <label htmlFor="day">Day</label>
            <input type="text" id="day" value={datePassed[0]+'th '+ datePassed[2]}/>
          </div>
        </div>  
      </div>
    </div>
  )
}