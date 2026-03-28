import React from 'react';
import Simessage from './Simessage';
import useGetMessages from '../hooks/useGetMessages.jsx';

const Messages = () => {
    useGetMessages()
  return (
   <div className='overflow-scroll no-scrollbar'>
    <Simessage/>
    <Simessage/>
    <Simessage/>
    <Simessage/>
    <Simessage/>
    <Simessage/>
    <Simessage/>
    <Simessage/>
    <Simessage/>
   </div>
  );
}

export default Messages;
