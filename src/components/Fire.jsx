import React, { useEffect, useState } from 'react';
import { storage } from '../lib/firebase';

const Fire = () => {

    const [videoUrl, setVideoUrl] = useState('');

    useEffect(() => {
        const getVideoUrl = async () => {
        try {
            const storageRef = storage.ref('videos/m1.mp4');
            const url = await storageRef.getDownloadURL();
            setVideoUrl(url);
        } catch (error) {
            console.error('Error getting video URL:', error);
        }
    };

    getVideoUrl();
  }, []);

  return (
    <div>
      <h1>Display Video</h1>
      {videoUrl ? (
        <video className='video' controls>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Fire;