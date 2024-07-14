import axios from 'axios'
import { useState } from 'react'
import spinner from "../assets/spinner.svg"

const Uploder = (props) => {
    const {user,setUser}=props
    const [loading,setLoading]=useState(false)

    const uploadImage=async (files)=>{
        setLoading(true);
        const formData=new FormData()
        formData.append("file",files[0])
        formData.append("upload_preset","ml_default")
        formData.append('cloud_name', 'day8hsahb');
        try{
            const response = await axios.post("https://api.cloudinary.com/v1_1/day8hsahb/image/upload",formData)
            setUser({...user,['imgUrl']:response.data.secure_url});
            setLoading(false)
        }catch (error) {
            console.error('Error uploading image:', error);
          }
    }
  return (
    <>
      {loading?<img src={spinner} alt="loding.." height={'16px'} width={"16px"} />:<input type='file'onChange={(e)=>{uploadImage(e.target.files)}} className='mt-3'/>}
    </>
  )
}

export default Uploder
