import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

cloudinary.config({
    cloud_name: process.env.API_CLOUDINARY_NAME,
    api_key: process.env.API_CLOUDINARY_KEY,
    api_secret: process.env.API_CLOUDINARY_SECRET,
});

const uploadOnCloudinary = async (localFilePath) =>{
    try {
        if(localFilePath == null) return null;
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type: 'auto',
        });
        console.log('File is uploaded to Cloudinary:', response.url);
        fs.unlinkSync(localFilePath); // Delete the local file after upload
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath); 
        console.error('Error uploading file to Cloudinary:', error);
        return null;
    }
}

export {uploadOnCloudinary};