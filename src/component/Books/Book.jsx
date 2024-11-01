import React from 'react';

const Book = ({book}) => {
    const {bookName,author,image,category,tags,rating} = book
    return (
        <div>
            <div className="card bg-base-100 w-96 p-6 border font-normalfont ">
  <figure className="px-5 py-10 rounded-xl bg-slate-300">
    <img 
   
      src={image}
      alt="Shoes"
      className=" w-32 h-40" />
  </figure>
  <div className="card-body  ">
    <div className='flex gap-5 text-btn1 mb-4'>
        <h4 className='bg-[#23BE0A0D] px-2  rounded-2xl'>{tags[0]}</h4>
        <h4 className='bg-[#23BE0A0D] px-2 rounded-2xl'>{tags[1]}</h4>
        
    </div>
   <div className='space-y-4 mb-4'>
   <h2 className="card-title font-stylefont">{bookName}</h2>
   <p> By {author}</p>
   </div>
    <div className='border-b-2 border-dotted'></div>
    <div className='flex justify-between mt-6'>
        <p>{category}</p>
        <p className='text-right'>{rating}</p>
       
    </div>
  </div>
</div>
        </div>
    );
};

export default Book;