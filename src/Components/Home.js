import React from 'react';
import Navbar from './Navbar';
import Intro from './Intro';
import Story from './Story';
import Gameplay from './Gameplay';
import Contacts from './Contacts';

export default function Home() {
  
    return(
    <div>
      <Navbar/>
      <Intro/>
      <Story/>
      <Gameplay/>
      <Contacts/>
    </div>
  );
}
