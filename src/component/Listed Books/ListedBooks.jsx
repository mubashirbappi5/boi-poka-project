import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getstoreReadlist } from '../../Utility/Addtodb';
import ReadBook from './ReadBook';

const ListedBooks = () => {
 const allbook = useLoaderData()
 const [readlist,setreadlist] =useState([])
 console.log(allbook)
 useEffect(()=>{
    const storedReadList = getstoreReadlist() 
    const storedReadListInt = storedReadList.map(id => parseInt(id))
    console.log(storedReadListInt)
    const readBook = allbook.filter(book => storedReadListInt.includes(book.bookId))
    console.log(readBook)
    setreadlist(readBook)

 },[])
    return (
        <div className='w-11/12 mx-auto'>
           <h1 className='text-center p-8 bg-gray-200 text-3xl font-bold font-normalfont rounded-lg'>Books</h1>
           <div className='mt-20'>
           <div role="tablist" className="tabs tabs-lifted">
  <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 1" />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
    Tab content {readlist.length}
    <div>
      {
        readlist.map(readlistbook => <ReadBook key={readlistbook.bookId} readlistbook={readlistbook}/>)
      }
    </div>
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