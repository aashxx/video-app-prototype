import React, { useState } from 'react';
import { storage } from '../lib/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const Upload = () => {

    const [videoUrl, setVideoUrl] = useState('');
    const [upload, setUpload] = useState('');

    const uploadVideo = async (e) => {
        const file = e.target.files[0];
        const storageRef = ref(storage, `videos/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
    
        try {
            setUpload("Uploading");
          await uploadTask;
          const downloadURL = await getDownloadURL(storageRef);
          setUpload('');
          console.log('Video uploaded successfully:', downloadURL);
          setVideoUrl(downloadURL);
        } catch (error) {
          console.error('Error uploading video:', error);
          alert('Error uploading video. Please try again later.');
        }
      };

    return (
        <div className='drive'>
            <h1>Firebase Implementation</h1>
            <input type="file" onChange={uploadVideo} />
            <p>{upload}</p>
            {videoUrl && (
                <div>
                <video className='video' controls>
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                </div>
            )}
        </div>
    )
}

export default Upload;