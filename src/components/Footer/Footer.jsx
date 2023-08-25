import './footer.scss';
import { useState, useEffect } from 'react';

function Footer() {
const apiKey =  'QE59KNA4GT3R';
const [time, setTime] = useState();
useEffect(()=> {
  fetch(`http://api.timezonedb.com/v2.1/get-time-zone?key${apiKey}`)
})


  return (
    <>footer</>
  )
}

export default Footer