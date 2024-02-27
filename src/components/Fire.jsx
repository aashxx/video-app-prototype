import React, { useEffect, useState } from 'react';
import { storage } from '../lib/firebase';
import { ref, getDownloadURL } from 'firebase/storage';

const Fire = () => {

    const [videoUrl, setVideoUrl] = useState('');

    useEffect(() => {
        const getVideoUrl = async () => {
        try {
            const storageRef = ref(storage, 'videos/m1.mp4');
            const url = await getDownloadURL(storageRef);
            setVideoUrl(url);
        } catch (error) {
            console.error('Error getting video URL:', error);
        }
    };

    getVideoUrl();
  }, []);

  return (
    <div className='drive'>
      <h1>Firebase Implementation</h1>
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