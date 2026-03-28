import React from 'react';

const SendInput = () => {
  return (
    <form className='w-full'>
        <div className='w-full h-13 flex items-center bg-zinc-900 border rounded-lg px-2 gap-2'>
            <input type="text" 
            placeholder='Type a message...'
            className='text-sm flex-1 h-full bg-transparent outline-none border-none' />
            <button className='bg-amber-700 hover:bg-amber-900 transition-colors duration-150 rounded-full p-2.5 flex items-center justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className=' -rotate-90 w-5 h-5 text-white' viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                </svg>
            </button>
        </div>
    </form>
  );
}

export default SendInput;