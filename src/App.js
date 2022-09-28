
import './App.css';
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import dateFormat, { masks } from "dateformat";

import "react-datepicker/dist/react-datepicker.css";

function App() {

/*     const [startDate, setStartDate] = useState(new Date());
    return (
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
    ); */

    const [startDate, setStartDate] = useState(
      setHours(setMinutes(new Date(), 30), 17)
    );

    
    return (
      
      <DatePicker
        selected={startDate}
        onChange={(date) => {const xx = setStartDate(date)
          //timespamp
          //const dateString = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss")
          const dateString = dateFormat(new Date(date), "yyyy-mm-dd HH:MM:ss")
          console.log(dateString)
        }
        
        }
        showTimeSelect
        minTime={setHours(setMinutes(new Date(), 30), 17)}
        maxTime={setHours(setMinutes(new Date(), 30), 20)}
        dateFormat="MMMM d, yyyy h:mm aa"
        timeIntervals={60}
/*        onChange={(date) => {
          const dateString = new Date(date).toLocaleDateString()
          console.log(dateString)
          const Currentdate=dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss")
          console.log(Currentdate) }*/
        
        
      />
    );
  
}

export default App;