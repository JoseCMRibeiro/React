import {  useEffect } from 'react';
import CountButton from '../components/countButton';
import GetCard from '../components/getCard';

export default function PL6() 
{  
  useEffect(() => 
  {
    console.log('CountButton going UP'); 

    return () => 
    {
      console.log('CountButton going DOWN');
    };
  }, []);

  return (
    <div>
        <h1>Counting</h1>
        <CountButton />

        <div className='center_screen'>

            <GetCard/>

        </div>


        
    </div>//-------------------------------------------PL6
  );
}


