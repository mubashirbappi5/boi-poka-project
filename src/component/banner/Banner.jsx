import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 md:py-20 py-6 w-11/12 mx-auto px-6 md:px-10 rounded-2xl">
  <div className="  flex-col lg:flex lg:items-center lg:flex-row-reverse">
    <img
      src="https://i.ibb.co.com/FKbLrhn/pile-books.png"
      className="max-w-md rounded-lg " />
    <div className='text-center md:text-left'>
      <h1 className=" text-3xl  lg:text-5xl font-bold font-stylefont">Books to freshen up  your bookshelf</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary bg-btn1 font-normalfont text-white font-bold border-none">View The List</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Banner;