import ListingsContainer from '@/components/ListingsContainer';
import React from 'react'

const page = () => {
  return (
    <div className='lg:mx-4 mx-2'>
      <div className="text-lg font-semibold my-4 ">Available Listings</div>
      <div className="flex sm:justify-start justify-center flex-wrap gap-4 flex-1">
        <ListingsContainer />
      </div>
    </div>
  );
}

export default page