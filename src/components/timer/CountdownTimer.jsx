import React from 'react';
import { useCountdown } from './useCountdown';
import { useContext } from 'react';
import { Language } from '@/Localization/Localization';
import { Context } from '../Context/Context';



const ShowCounter = ({ days, hours, minutes, seconds }) => {

    const {lang} = useContext(Context)

    return (
        <div className="grid justify-center text-white rounded-[7px] grid-flow-col gap-3 text-center auto-cols-max bg-red-500">
        <div className="flex flex-col p-2 bg-neutral text-[16px] font-normal rounded-box text-neutral-content">
            <span className="text-[20px] font-bold" value={days}>{days}</span>
            {Language[lang].Banner.Days}
        </div> 
        <div className="flex items-center justify-center text-[32px] ">
            <span>:</span>
        </div>
        <div className="flex flex-col p-2 bg-neutral text-[16px] font-normal rounded-box text-neutral-content">
            <span className="text-[20px] font-bold" value={hours}>{hours}</span>
            {Language[lang].Banner.Hours}
        </div>
        <div className="flex items-center justify-center text-[32px] ">
            <span>:</span>
        </div>
        <div className="flex flex-col p-2 bg-neutral text-[16px] font-normal rounded-box text-neutral-content">
            <span className="text-[20px] font-bold" value={minutes}>{minutes}</span>
            {Language[lang].Banner.Minutes}
        </div>
        <div className="flex items-center justify-center text-[32px] ">
            <span>:</span>
        </div>
        <div className="flex flex-col p-2 bg-neutral text-[16px] font-normal rounded-box text-neutral-content">
            <span className="text-[20px] font-bold" value={seconds}>{seconds}</span>
            {Language[lang].Banner.Seconds}
        </div>
    </div>
    );
  };
  
  
  const CountdownTimer = ({ targetDate }) => {
  
 
    const [days, hours, minutes, seconds] = useCountdown(targetDate);
  
  
      return (
        <ShowCounter
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
      );
    
  };
  

  export default CountdownTimer;