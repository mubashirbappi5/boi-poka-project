import React, { useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';



const BooksDitails = () => {
    
    const{bookId}= useParams()
    const id = parseInt(bookId)
    const data = useLoaderData()
    
    
    
    const book = data.find(book => book.bookId === id)
    console.log(book)

    
    const {bookName,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing} =book

    
    return (
        <div className='w-11/12 mx-auto'>
            <div className='grid grid-cols-2 gap-6'>
               <div className='p-10 flex justify-center rounded-xl bg-[#1313130D]'>
                <img src={image} alt="" />
               </div>
               <div className='font-normalfont space-y-5'>
                <h className="font-stylefont font-bold text-3xl">{bookName}</h>
                <h4 className='font-medium'>{author}</h4>
                <h5 className='border-y-2 py-1 font-medium'>{category}</h5>
                <div>
                    <p className='text-[#131313B3]'><span className='font-semibold text-xl text-black'>Review: </span>{review}</p>
                </div>
                <div className='flex gap-7 border-b-2 pb-8'>
                    <h4 className='font-bold text-xl'>Tag</h4>
                    {
                        tags.map(tag => <h4 className='bg-[#23BE0A0D] px-2  rounded-2xl text-btn1'>#{tag}</h4>)
                    }
                </div>
                <div className=' text-[#131313B3] '>
                    <div className='flex flex-col  justify-between gap-7'>
                    <div className='flex items-center gap-14  '><h4>Number of Pages:</h4>  <h3 className='font-bold text-black'>{totalPages}</h3></div>
                   <div className='flex items-center   gap-28'> <h4>Publisher:</h4> <h3 className='font-bold text-black'>{publisher}</h3></div>
                    <div className='flex items-center  gap-12  '><h4>Year of Publishing:</h4><h3 className='font-bold text-black'>{yearOfPublishing}</h3></div>
                    <div className='flex items-center   gap-36 '>
                    <h4>Rating:</h4>
                        
                        
                        <h3 className='font-bold text-black'>{rating}</h3>
                    </div>
                    <div className='flex gap-10'>
                    <button onClick={()=>handlereadbtn(bookId)} className='btn bg-transparent border'>Read</button>
                    <button className='btn bg-btn2 text-white'>Wishlist</button>
                </div>
                    </div>
                   
                </div>
                
               </div>
           


            </div>
           
           
        </div>
    );
};

export default BooksDitails;