import React, {useEffect, useState } from 'react'
import FormData from 'form-data'
import axios from 'axios';
import Nav from './Nav';
import ImageCropper from './ImageCropper'

        const UpdateInfo = (article) => {
    const articleId = article;
    const [blob, setBlob] = useState(null)
    const [firstname, setFirstname] = useState(null);
    const [lastname, setLastname] = useState(null);
    const [phone, setPhone] = useState(null);
    const [address, setAddress] = useState(null);
    const [blobThumbnail, setBlobThumbnail] = useState(null)
    const [inputImg, setInputImg] = useState('')
    
    useEffect (() => {
        axios.get("http://localhost:8080/api/v1/users/single")
                .then((response) => {
                    setFirstname(response.data.firstname);
                    setLastname(response.data.lastname);
                    setPhone(response.data.phone);
                    setAddress(response.data.address);
                }).catch((err) => {
        });
    })

    const getBlob = (blob) => {
        // pass blob up from the ImageCropper component
        setBlob(blob);
    };
    const getBlobThumbnail = (blobThumbnail) => {
        // pass blob up from the ImageCropper component
        setBlobThumbnail(blobThumbnail);
    };

    const onInputChange = (e) => {
        // convert image file to base64 string
        const file = e.target.files[0]
        const reader = new FileReader()

        reader.addEventListener('load', () => {
            setInputImg(reader.result)
        }, false)

        if (file) {
            reader.readAsDataURL(file)
        }
    }

    const handleSubmitImage = (e) => {
        e.preventDefault()
        let data = new FormData();
        data.append('file', blob, "Hello");
        uploadFiles(data);


    }
    async function uploadFiles(data) {
        var response = await axios.post("http://localhost:3030/api/v1/blog/upload", data, {

            headers: {
                'accept': 'application/json',
                'Accept-Language': 'en-US,en;q=0.8',
                'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
            }

        })
                .then((response) => {
                    var user = {firstname: firstname, lastname: lastname, address: address, phone: phone, image: response.data};
                    axios.put("http://localhost:8080/api/v1/users/single", user)
                            .then((response) => {
                                swal("", "", "success");
                            }).catch((err) => {
                    });
                });
    }

    return (
            <div class="session ">
                
                        <p class="Roboto font-lg">Update your personal information</p>
                        
                        <form onSubmit={handleSubmitImage} class=" flex-vertical-c ">
                        
                            <div class="relative  input-variant-x">
                                <label for="file-upload" class="custom-file-upload  font-sm Roboto pointer">
                                    <input
                                        id='file-upload'
                                        type='file'
                                        accept='image/*'
                                        onChange={onInputChange}
                                        class=''
                                        />
            
                                    <span class="material-symbols-outlined float-right bg-white padding-md">
                                        photo_size_select_small select an image
                                    </span>
                                </label>
            
                                <div class=" h-50 ">
                                    {
                                        inputImg && (
                                                    <ImageCropper 
                                                        getBlob={getBlob}
                            
                                                        inputImg={inputImg}
                                                        />

                                                    )
                                    }
                                </div>
                            </div>
                                                                       
                                                                    
                                                             
                            <div class=" content-body-md" >
                                <div class="w-100">
                                    <span class="font-bold text-gray">First name*</span>
                                    <input type="text"  value={firstname} class="input-variant-x w-80 margin-sm-fixed" required onChange={setFirstname} placeholder="First name" />
                                </div>
                                <div class="w-100">
                                    <span class="font-bold text-gray">Second name*</span>                            
                                    <input type="text"  value={lastname} class=" input-variant-x w-80 form-insput  margin-sm-fixed" required onChange={setLastname} placeholder="Last name" />
                                </div>
            
                                <div class="w-100">
                                    <span class="font-bold text-gray">Phone*</span>                        
                                    <input type="text" id="phone" value={phone} class="w-80 input-variant-x form-insput  margin-sm-fixed" required onChange={setPhone} placeholder="Phone" />
                                </div>
                                <div class="w-100">
                                    <span class="font-bold text-gray">Address*</span>                        
                                    <input type="text" id="address" value={address} class="w-80 input-variant-x form-insput  margin-sm-fixed" required onChange={setAddress} placeholder="Address" />
                                </div>                   
                            </div>  
                            
                                <input type="submit" value="Update" className="" />
                            
                        </form>
                    
                
            </div>
            )
}

export default UpdateInfo