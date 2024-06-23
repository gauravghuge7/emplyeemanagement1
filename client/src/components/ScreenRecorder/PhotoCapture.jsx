// PhotoCapture.js
import { useRef, useState, useEffect } from 'react';

function PhotoCapture() {
    const videoRef = useRef(null);
    const [photo, setPhoto] = useState(null);
    const intervalRef = useRef(null);
    const timeoutRef = useRef(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            startCamera();
        }, 60 * 60 * 1000);

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
            const response = await fetch('YOUR_BACKEND_API_ENDPOINT', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // authorization tokens
                },
                body: JSON.stringify({ photo: photoData })
            });

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