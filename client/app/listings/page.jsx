import ListingsContainer from '@/components/ListingsContainer';
import React from 'react'

const page = () => {
  return (
    <div className="lg:mx-4 mx-2">
      <div className="text-lg font-semibold my-4 ">Available Listings</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
        <ListingsContainer />
      </div>
    </div>
  );
}

export default page