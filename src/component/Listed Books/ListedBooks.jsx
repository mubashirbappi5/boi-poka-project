import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getstoreReadlist, getstorewishlist } from "../../Utility/Addtodb";
import ReadBook from "./ReadBook";
import WishListBook from "./WishListBook";

const ListedBooks = () => {
  const allbook = useLoaderData();
  const [readlist, setreadlist] = useState([]);
  const [wislist, setwislist] = useState([]);
  const [sort,setsort] = useState('')
  console.log(allbook);
  useEffect(() => {
    const storedReadList = getstoreReadlist();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));
    console.log(storedReadListInt);
    const readBook = allbook.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );
    console.log(readBook);
    setreadlist(readBook);
  }, []);
  useEffect(() => {
    const wishlistdata = getstorewishlist();
    const wishlistdataInt = wishlistdata.map((id) => parseInt(id));
    console.log("this is", wishlistdataInt);
    const Wisslist = allbook.filter((book) =>
      wishlistdataInt.includes(book.bookId)
    );
    console.log(Wisslist);
    setwislist(Wisslist);
  }, []);
  const handleshort = (shorttype) =>{
    setsort(shorttype)
    if(shorttype === 'no-of-page'){
      const sortpagew = [...wislist].sort((a,b)=> b.totalPages -a.totalPages)
      setwislist(sortpagew)
      const sortpager = [...readlist].sort((a,b)=> b.totalPages -a.totalPages)
      setreadlist(sortpager)
    }
    else if(shorttype ==='rating-sort'){
      const sortratingW = [...wislist].sort((a,b)=> b.rating -a.rating)
      setwislist(sortratingW)
      const sortratingr = [...readlist].sort((a,b)=> b.rating -a.rating)
      setreadlist(sortratingr)
    }

  }
  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-center p-8 bg-gray-200 text-3xl font-bold font-normalfont rounded-lg">
        Books
      </h1>
     <div className="flex justify-center mt-9" >
     <div className="dropdown ">
        <div tabIndex={0} role="button" className="btn bg-btn1 text-white font-bold font-normalfont ">
          {sort?sort:"sort by"} 
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li onClick={()=>handleshort('rating-sort') }>
            <a>Rating</a>
          </li>
          <li onClick={()=>handleshort('no-of-page')}>
            <a>No of page</a>
          </li>
        </ul>
      </div>
     </div>
      <div className="mt-20">
        <div role="tablist" className="tabs tabs-lifted">
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="ReadList"
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            <div>
              {readlist.map((readlistbook) => (
                <ReadBook
                  key={readlistbook.bookId}
                  readlistbook={readlistbook}
                />
              ))}
            </div>
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Wishlist"
            defaultChecked
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            {wislist.map((wishbook) => (
              <WishListBook key={wishbook.bookId} wishbook={wishbook} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
