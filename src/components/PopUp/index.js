import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {clearData} from '../../actions';
import './popup.scss';

export default function PopUp(){
  let mod = 'th';
  const dispatch = useDispatch();
  const datePassed = useSelector(state => state.calendarDataSender);
  
  if ([1,21,31].includes(datePassed[0])){
    mod = 'st';
  } else if ([2, 22].includes(datePassed[0])){
    mod = 'nd';
  } else if (datePassed[0] === 3) {
    mod = 'rd';
  }

  return (
    <div className="Popup">
      <div className="Popup__shadow"></div>
      <div className="Popup__container">
        <button
          className="Popup__btn"
          onClick={()=>dispatch(clearData())}
        >
          X
        </button>
        <div className="Popup__labels">
          <div className="Popup__label-box">
            <label htmlFor="month">Month</label>
            <input
              type="text"
              id="month"
              value={datePassed[1]}
              readOnly
            />
          </div>
          <div className="Popup__label-box">
            <label htmlFor="day">Day</label>
            <input
              type="text"
              id="day"
              value={String(datePassed[0]).concat(mod, ' ', datePassed[2])}
              readOnly
            />
          </div>
        </div>  
      </div>
    </div>
  )
}
