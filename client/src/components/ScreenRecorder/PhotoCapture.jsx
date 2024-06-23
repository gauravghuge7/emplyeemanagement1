// PhotoCapture.js
import axios from 'axios';
import { useRef, useState, useEffect } from 'react';

function PhotoCapture() {
    const videoRef = useRef(null);
    const [photo, setPhoto] = useState(null);
    const intervalRef = useRef(null);
    const timeoutRef = useRef(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            startCamera();
        },  15 * 1000);

        return () => {
            console.log('Component unmounting');
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
            stopCameraStream();
        };
    }, []);

    const startCamera = async () => {
        try {
            stopCameraStream();
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            videoRef.current.srcObject = stream;
            timeoutRef.current = setTimeout(() => capturePhoto(), 1000);
        } catch (error) {
            console.error('Error accessing camera:', error);
        }
    };

    const capturePhoto = () => {
        const video = videoRef.current;
        if (video && video.readyState === video.HAVE_ENOUGH_DATA) {
            const canvas = document.createElement('canvas');
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            const context = canvas.getContext('2d');
            context.drawImage(video, 0, 0, canvas.width, canvas.height);

            const photoData = canvas.toDataURL('image/png');
            setPhoto(photoData);
            console.log('Photo captured:', photoData);
            sendPhotoToBackend(photoData);
            stopCameraStream();
        }
    };

    const stopCameraStream = () => {
        if (videoRef.current && videoRef.current.srcObject) {
            const stream = videoRef.current.srcObject;
            const tracks = stream.getTracks();
            tracks.forEach(track => track.stop());
        }
    };

    const sendPhotoToBackend = async (photoData) => {
        try {

            const formData = new FormData();
            formData.append('photo', photoData);
            
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    
                },
                withCredentials: true,
            }

            const body = JSON.stringify({ photo: photoData })

            const response = await axios.post('http://localhost:5200/api/v1/user/sendSnapshot', formData, config);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            console.log('Photo sent successfully:', result);
        } catch (error) {
            console.error('Error sending photo to backend:', error);
        }
    };

    return (
        <div className='mt-44'>
            
         
            <video ref={videoRef} autoPlay style={{ display: 'none' }} />
            {photo && <img src={photo} alt="User Photo" />}
        </div>
    );
}

export default PhotoCapture;