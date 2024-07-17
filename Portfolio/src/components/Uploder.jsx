import axios from 'axios'
import { useState } from 'react'
import spinner from "../assets/spinner.svg"
import { editAboutApi, imageDeleteApi } from '../apis/apis'

const Uploder = ({user,setUser,onHide}) => {
    const [loading,setLoading]=useState(false)

      const uploadImage=async (files)=>{
        setLoading(true);
        const formData=new FormData()
        formData.append("file",files[0])
        formData.append("upload_preset","ml_default")
        formData.append('cloud_name', 'day8hsahb');
        try{
          if(user.imgUrl){
            await imageDeleteApi(user.publicUrl);
          }
            const response = await axios.post("https://api.cloudinary.com/v1_1/day8hsahb/image/upload",formData)
            setUser({...user,imgUrl:response.data.secure_url,publicUrl:response.data.public_id});
            const result=await editAboutApi({...user,imgUrl:response.data.secure_url,publicUrl:response.data.public_id},user._id)
            if(result.status===200){
              alert("Profile Picture Updated sucessfully");
              onHide()
            }else{
              const res = await result.json();
              alert(`unsuccessful: ${res.message?res.message:res.error}`)
            }
        }catch (error) {
            console.error('Error uploading image:', error);
            alert("Failed to upload image. Please try again.");
          }finally{
            setLoading(false)
          }
    }
  return (
    <>
      {loading?<img src={spinner} alt="loding.." height={'25px'} width={"25px"} />:<input type='file'onChange={(e)=>{uploadImage(e.target.files)}} className='mt-3'/>}
    </>
  )
}

export default Uploder
