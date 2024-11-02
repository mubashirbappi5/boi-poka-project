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
       console.log( id,"all raady exiest ")
    }
    else{
        storedlist.push(id)
        const storedliststr = JSON.stringify(storedlist)
        localStorage.setItem('read-list',storedliststr)
    }


}
export{addtostoreReadlist,getstoreReadlist}