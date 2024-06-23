import React, { useRef, useState, useEffect } from 'react';

function PhotoCapture({ capture }) {
    const videoRef = useRef(null);
    const [photo, setPhoto] = useState(null);

    useEffect(() => {
        const startCamera = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                videoRef.current.srcObject = stream;
            } catch (error) {
                console.error('Error accessing camera:', error);
            }
        };

        startCamera();

        return () => {
            if (videoRef.current && videoRef.current.srcObject) {
                const stream = videoRef.current.srcObject;
                const tracks = stream.getTracks();
                tracks.forEach(track => track.stop());
            }
        };
    }, []);

    useEffect(() => {
        if (capture) {
            capturePhoto();
        }
    }, [capture]);

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
            <video ref={videoRef} autoPlay style={{ display: 'none' }} />
            {photo && <img src={photo} alt="User Photo" />}
        </div>
    );
}

export default PhotoCapture;
