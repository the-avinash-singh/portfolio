import axios from 'axios'
import { useState } from 'react'
import spinner from "../assets/spinner.svg"

const Uploder = (props) => {
    const {user,setUser}=props
    const [loading,setLoading]=useState(false)
    const deletePrevImage = async (publicId) => {
        const url = `https://api.cloudinary.com/v1_1/day8hsahb/delete_by_token`;
    
        try {
          await axios.post(url, {
            token: publicId,
            api_key: '363248123965793',
            api_secret: 'X1S5ZueppKFB2W-OPNZEVzWCEdg',
          });
          console.log('Previous image deleted successfully.');
        } catch (error) {
          console.error('Error deleting previous image:', error);
        }
      };

    const uploadImage=async (files)=>{
        setLoading(true);
        if(user.imgUrl){
            deletePrevImage(user.imgUrl);
        }
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
      {loading?<img src={spinner} alt="loding.." height={'25px'} width={"25px"} />:<input type='file'onChange={(e)=>{uploadImage(e.target.files)}} className='mt-3'/>}
    </>
  )
}

export default Uploder
