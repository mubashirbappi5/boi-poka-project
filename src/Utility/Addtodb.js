import { toast } from 'react-toastify';
const getstoreReadlist =()=>{
   const storedliststr = localStorage.getItem('read-list')
   if(storedliststr) {
    const storedList = JSON.parse(storedliststr)
    return storedList
    

   }
   else{
    return[]
   }
}
const addtostoreReadlist = (id)=>{
    const storedlist = getstoreReadlist();
    if(storedlist.includes(id)){
        toast.warning("Already exist!"); 
    }
    else{
        storedlist.push(id)
        const storedliststr = JSON.stringify(storedlist)
        localStorage.setItem('read-list',storedliststr)
        toast.success("Add to readlist section!"); 
    }
    


}
const getstorewishlist =()=>{
    const storeliststr = localStorage.getItem('wish-list')
    if(storeliststr){
        const sotreList = JSON.parse(storeliststr)
       
        return sotreList
    }
    else{
        return []
    }
}
const addwishlist = (id)=>{
    const sotreList= getstorewishlist()
  
    if(sotreList.includes(id)){
        toast.warning("Already exist!"); 
    } 
    else{
        sotreList.push(id)
        const storedliststr = JSON.stringify(sotreList)
        localStorage.setItem('wish-list',storedliststr)
        toast.success("Add to wishlist section!"); 
        
    }
}
export{addtostoreReadlist,getstoreReadlist,addwishlist,getstorewishlist}