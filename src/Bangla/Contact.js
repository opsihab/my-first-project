import {React,useEffect,useState} from 'react';
import LinearProgress from '@mui/material/LinearProgress';


function Contact() {
  const [loading,setLoading] = useState(false);

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(true);
    },700)
  })
  return (
    <div className='main'>
 
      {loading ?  <h1 className='titel'>যোগাযোগ</h1> :    <LinearProgress
      
        style={{ position: 'fixed', top: 0, left: 0, width: '100%' }}
      />}
    </div>
  );
}

export default Contact;