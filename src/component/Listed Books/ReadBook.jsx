import React from 'react';
import { useNavigate } from 'react-router-dom';

const ReadBook = ({readlistbook}) => {
    const {bookName,author,image,totalPages,rating,category,tags,publisher,yearOfPublishing,bookId} =readlistbook
    const navigate = useNavigate()
    const handleviewbtn =()=>{
        navigate(`/books/${bookId}`)
    }
    return (
        <div>
            <div className='flex border rounded-lg mb-6 p-6 gap-7 font-normalfont'>
                <div className='bg-gray-200 rounded-lg px-10 py-5'>
                    <img className='h-48' src={image} alt="" />
                </div>
                <div className='space-y-4'>
                    <h1 className='font-stylefont font-bold text-3xl'>{bookName}</h1>
                    <h4 className='font-medium'>{author}</h4>
                    <div className='flex gap-6'>
                        <h1 className='font-bold'>Tag</h1>
                        {
                          tags.map(tag => <h3 className='bg-green-100 text-btn1 p-1 rounded-xl'>#{tag}</h3>)  
                        }
                        <h4 className='text-[#13131399]'>Year of Publishing: {yearOfPublishing}</h4>

                    </div>
                    <div className='flex border-b-2 pb-4 gap-5'>
                        <h3 className='text-[#13131399]'>Publisher: {publisher}</h3>
                        <h3 className='text-[#13131399]'> Pages: {totalPages}</h3>
                    </div>
                    <div className='flex gap-6'>
                        <h1 className='bg-sky-100 text-btn2 p-2 font-bold  rounded-2xl '>Category: {category}</h1>
                        <h1 className='bg-[#FFAC3326] text-[#FFAC33] p-2 font-bold  rounded-2xl '>Rating: {rating}</h1>
                       <button onClick={handleviewbtn} className=' py-2 px-4 font-bold bg-btn1 rounded-3xl text-white'>View Details</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default ReadBook;