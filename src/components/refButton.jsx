import { useContext,useRef } from 'react';
import { ClickCounter } from './context';


export default function RefButton({children }) 
{  
    const { count, setCount} = useContext(ClickCounter)
    const myRef = useRef(0);

  function HandleClick()
  {
    myRef.current=myRef.current+1;    
    
    setCount(count +1);
  }

  return (
    <div>
        <label>I count Clicks</label><br></br>
        <button  onClick={HandleClick}>{/*sets them to value of children */}          
            {children}          
        </button><label> You clicked me {myRef.current} times</label><br></br>
        <label>The Total is :{count}</label>
     </div>
  );
}