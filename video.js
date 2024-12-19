const video = document.getElementById('video');
const startRecord = document.getElementById('startRecord');
const stopRecord = document.getElementById('stopRecord');
const responseMessage = document.getElementById('responseMessage');

let mediaRecorder;
let recordedChunks = [];

// Start video recording
startRecord.addEventListener('click', async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    video.srcObject = stream;
    mediaRecorder = new MediaRecorder(stream);

    mediaRecorder.ondataavailable = event => {
        if (event.data.size > 0) {
            recordedChunks.push(event.data);
        }
    };

    mediaRecorder.onstop = async () => {
        const blob = new Blob(recordedChunks, { type: 'video/webm' });
        recordedChunks = [];
        await uploadVideo(blob);
        stream.getTracks().forEach(track => track.stop()); // Stop all tracks
        video.srcObject = null; // Stop the video stream
    };

    mediaRecorder.start();
    startRecord.disabled = true;
    stopRecord.disabled = false;
    responseMessage.innerText = 'Recording...';
});

// Stop video recording
stopRecord.addEventListener('click', () => {
    mediaRecorder.stop();
    startRecord.disabled = false;
    stopRecord.disabled = true;
    responseMessage.innerText = 'Stopped recording. Uploading...';
});

// Upload video to server
async function uploadVideo(blob) {
    const formData = new FormData();
    formData.append('video', blob, 'oath-video.webm');

    try {
        const response = await fetch('http://localhost:3000/upload', {
            method: 'POST',
            body: formData,
        });

        const result = await response.json();
        if (response.ok) {
            responseMessage.innerText = `Video uploaded successfully: ${result.message}`;
        } else {
            responseMessage.innerText = `Error uploading video: ${result.message}`;
        }
    } catch (error) {
        console.error('Error uploading video:', error);
        responseMessage.innerText = 'Error: Unable to upload video.';
    }
}
