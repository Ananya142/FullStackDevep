import { useState } from "react";
import './App.css'
function App() {
  let count = 0; 
  let [cnt, setcnt] = useState(0);
  let date_time = new Date();
  date_time.setDate(date_time.getDate() + cnt);

  return (
    <>
      <button onClick={() => {
        console.log(count++);
        setcnt(cnt+1);
      }}>
        plus+
      </button>
      
      <p> count={cnt}</p> 
      
      <button onClick={() => {
        console.log(count--);
        setcnt(cnt - 1);
      }}>
        minus-
      </button>

      <div>
        <p>{date_time.toDateString()}</p>
      </div>
    </>
  );
}
