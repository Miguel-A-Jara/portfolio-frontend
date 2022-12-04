import { useEffect, useState } from 'react';

const useTimeZone = () => {

  const [paraguayTime, setParaguayTime] = useState({ 
    full: '', hours: '', minutes: '', seconds: '', format: ''
  });

  useEffect(() => {
    
    const intervalID = setInterval(() => {

      const countryTime = new Date().toLocaleTimeString('es-PY', {
        timeZone: 'America/Asuncion', timeStyle: 'medium', hourCycle: 'h12'
      });

      const hours   = countryTime.slice(0, 2);
      const minutes = countryTime.slice(3, 5);
      const seconds = countryTime.slice(6, 8);
      const format  = countryTime.slice(8, -1);

      setParaguayTime({ 
        full: countryTime, hours, minutes, seconds, format 
      });

    }, 1000);

    return () => clearInterval(intervalID);

  }, []);

  return paraguayTime;
}

export default useTimeZone;