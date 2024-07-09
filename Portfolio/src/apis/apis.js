
const host="http://localhost:3000"

export const signinApi=async(user)=>{
    try{
        const res=await fetch(`${host}/signin`,{
            method:"Post",
            headers:{
                "Content-Type":"application/json"
            },
            credentials:"include",
            body:JSON.stringify({
            name:user.name,
            email:user.email,
            phone:user.phone,
            work:user.work,
            password:user.password,
            })
        })
        return res
    }catch(err){
        console.log(err)
    }
}

export const loginApi=async(user)=>{
    try{
        const res=await fetch(`${host}/login`,{
            method:'post',
            headers:{
                "Content-Type":"application/json"
            },
            credentials:"include",
            body:JSON.stringify({
                email:user.email,
                password:user.password
            })
        })
        return res
    }catch(err){
        console.log(err);
    }
}