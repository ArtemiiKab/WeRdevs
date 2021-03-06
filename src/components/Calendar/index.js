import React, {useState, useEffect} from 'react';
import './calendar.scss';


export default function Calendar({setClicked, setDateInPopup}){
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  const [month, setMonth]= useState(months[new Date().getMonth()]);
  const [year, setYear] = useState(new Date().getFullYear());
  const [calendar, setCalendar] = useState(createCalendar(year, months.indexOf(month)))

  function handlePrevMonth(){
    setMonth(()=>{
     const count = months.indexOf(month)-1
        if (count >= 0) {
          return months[count]
        } else {
          setYear(year-1);
          return 'December'
        } 
    })
  }

  function handleNextMonth(){
    setMonth(()=>{
        const count = months.indexOf(month)+1
        if (count > months.length-1) {
          setYear(year+1);
          return 'January'
        } else {
          return months[count];
        }
    })
  }

  useEffect(()=>{   
    setCalendar(createCalendar(year, months.indexOf(month)));
  },[month])

  function createCalendar(year, month) {
    const result =[];
    const date = new Date(year, month);
    let day =1;
    let nextMonthDay = 1
    const monthStart = date.getDay();
    let lastMonthDay = -monthStart+1;

    const daysInMonth = new Date(year, month+1, 0).getDate();

    for(let i=0; i < (daysInMonth+monthStart)/days.length; i++){
       result[i] = [];

       for(let j=0; j<days.length; j++) {
          if((i===0 && j < monthStart)){
            result[i][j] = [false, new Date(year, month, lastMonthDay++)];
          } else if(day > daysInMonth){
            result[i][j] = [false, new Date(year, month+2, nextMonthDay++)];
          } else {
            result[i][j] = [true, new Date(year, month, day++)]
          }
       }
    }

    return result;
  }

  function handleDayClick(dateObj){
    setClicked(true);
    setDateInPopup([dateObj.getDate(), months[dateObj.getMonth()], days[dateObj.getDay()]]);
  }

  return (
    <div className="Calendar">
        <div className="Calendar__header">
            <button
              className="Calendar__btn"
              onClick={handlePrevMonth}
            >
              {'<'}
            </button>
            <p>{month+' '+year}</p>
            <button
              className="Calendar__btn"
              onClick={handleNextMonth}
            >
              {'>'}
            </button>
        </div>
        <table className="Calendar__table">
            <tbody className="Calendar__tbody">
                {calendar.map((w, i) => 
                  <tr key={i+'week'}>
                    {w.map(d => d[0] ?
                    <td onClick={()=>handleDayClick(d[1])}>{d[1].getDate()}</td> 
                    :
                    <td className="Calendar__greyDay">{d[1].getDate()}</td>)}
                  </tr>)}
            </tbody>
            <thead className="Calendar__thead">
              <tr>
                 {days.map(d=><td key={d}>{d[0]}</td>)}
              </tr>
            </thead>
        </table> 
    </div>
  )
}