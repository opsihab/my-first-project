import React from 'react'
import Navbar from './Navbar';
import { Route,Routes } from 'react-router-dom';
import Home from './Home';
//import About from './About';
import LinearProgress from '@mui/material/LinearProgress';
import Contact from './Contact'
const LazyAbout = React.lazy(() => import('./About'))

export default function BanglaAll() {
  return (
    <div>
      Pag
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={
        <React.Suspense fallback={
          <LinearProgress
    
        style={{ position: 'fixed', top: 0, left: 0, width: '100%' }}
      />}>
        <LazyAbout />
        </React.Suspense>} 
        />

        <Route path="/contact" element={<Contact />} />

      </Routes>
    </div>
  )
}
