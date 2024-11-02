import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ListedBooks = () => {
 const allbook = useLoaderData()
    return (
        <div className='w-11/12 mx-auto'>
           <h1 className='text-center p-8 bg-gray-200 text-3xl font-bold font-normalfont rounded-lg'>Books</h1>
           <div className='mt-20'>
           <div role="tablist" className="tabs tabs-lifted">
  <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 1" />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
    Tab content 1
  </div>

  <input
    type="radio"
    name="my_tabs_2"
    role="tab"
    className="tab"
    aria-label="Tab 2"
    defaultChecked />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
    Tab content 2
  </div>

  
  
    
  
</div>

           </div>
            
        </div>
    );
};

export default ListedBooks;