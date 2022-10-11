import React from 'react'

import { useEffect } from 'react';
import { useState } from 'react';

const FileImage = ({setUser,user}) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
  
    useEffect(() =>{
        if(selectedImage){
            setImageUrl(URL.createObjectURL(selectedImage))
            setUser({...user, img: imageUrl})
        }
    }, [selectedImage])

  return (

      <label className='addUserImage'>
        {imageUrl && selectedImage?
        
            <img className='userImage' src={imageUrl} alt={selectedImage.name}  />
            :
            
              <input
              type="file"
              accept='.jpg, .jpeg'
              onChange={(e) => {setSelectedImage(e.target.files[0])}}
              />
            
        }
    </label>

  )
}
export default FileImage;
