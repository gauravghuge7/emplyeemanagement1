// PhotoCapture.js
import React, { useRef, useState } from 'react';

function PhotoCapture() {
    
    const videoRef = useRef(null);
    const [photo, setPhoto] = useState(null);

    const startCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            videoRef.current.srcObject = stream;
        } catch (error) {
            console.error('Error accessing camera:', error);
        }
    };

    const capturePhoto = () => {
        const video = videoRef.current;
        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const context = canvas.getContext('2d');
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        setPhoto(canvas.toDataURL('image/png'));

        // Stop the camera stream
        const stream = video.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
    };

    return (
        <div>
            <button onClick={startCamera}>Start Camera</button>
            <video ref={videoRef} autoPlay style={{ display: 'none' }} />
            <button onClick={capturePhoto}>Capture Photo</button>
            {photo && <img src={photo} alt="User Photo" />}
        </div>
    );
}

export default PhotoCapture;