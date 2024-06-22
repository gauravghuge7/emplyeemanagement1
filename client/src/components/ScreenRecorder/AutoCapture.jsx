import { useEffect } from 'react';

import PhotoCapture from './PhotoCapture';

function AutoCapture() {
    useEffect(() => {
        const interval = setInterval(() => {
            // Call functions to capture screen and photo here
        }, 1 * 60  * 1000); // 2 hours in milliseconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
          
            <PhotoCapture />
        </div>
    );
}

export default AutoCapture;