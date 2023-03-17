import {React,useEffect,useState} from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import './css/Contact.css'
import Skeleton from '@mui/material/Skeleton';

function Contact() {
  const [loading,setLoading] = useState(false);

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(true);
    },700)
  })
  return (
    <div className='main'>
 
      {loading ?  <h1 className='titel'>Contact Us page comming soon</h1> :  <div> <LinearProgress 
      
        style={{ position: 'fixed', top: 0, left: 0, width: '100%' }}
      />  <h1 className='titel'><Skeleton /></h1></div>}
    </div>
  );
}

export default Contact;