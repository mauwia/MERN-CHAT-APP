export const onSuccess=async(response)=>{
    try{
        let  response1=await fetch('http://localhost:8000/user/login/getToken',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                access_token:response.accessToken,
            })
        })
         response1=await response1.json()
        //  console.log(response1)
         localStorage.setItem('token',JSON.stringify(response1.token))
         console.log(response1)
         localStorage.setItem('id',JSON.stringify(response1.user.facebook.id))
         localStorage.setItem('_id',JSON.stringify(response1.user._id))
         return response1
    }catch(err){
        console.log(err)
        return err
    }
}
export const getDetails=async()=>{
    try{
    let token = JSON.parse(localStorage.token)
    let response =await fetch(`http://localhost:8000/user/getDetails/?token=${token}`,{method:'GET',headers:{'Content-Type':'application/json'}})
    response=await response.json()
    return response
    }catch(err){
        return err
    }
    
}