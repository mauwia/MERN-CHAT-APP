export const getAllRooms=async ()=>{
    let token = JSON.parse(localStorage.token)
    // console.log(token)
    let response =await fetch(`http://localhost:8000/chat/create/?token=${token}`,{method:'GET',headers:{'Content-Type':'application/json'}})
   let  data=await response.json()
    // console.log(data)
    return data
    
}
export const getOneRooms=async (id)=>{
    let token = JSON.parse(localStorage.token)
    // console.log(token)
    let response =await fetch(`http://localhost:8000/chat/getRoom/${id}/?token=${token}`,{method:'GET',headers:{'Content-Type':'application/json'}})
   let  data=await response.json()
    // console.log(data)
    return data
    
}