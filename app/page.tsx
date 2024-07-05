
import React from 'react';

const Page = () => {
  return (
    <div className='grid place-items-center h-screen bg-gray-900 text-white'>
      <h1 className='text-4xl font-bold underline mb-8'>
        Yooooooo Broooos
      </h1>
      <div className='space-x-4'>
        <a
          href='/signin'
          className='px-4 py-2 bg-gray-600 rounded-lg hover:bg-gray-700 focus:outline-none focus:bg-gray-700 text-white text-lg'
        >
          Sign In
        </a>
        <a
          href='/signup'
          className='px-4 py-2 bg-gray-600 rounded-lg hover:bg-gray-700 focus:outline-none focus:bg-gray-700 text-white text-lg'
        >
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default Page;