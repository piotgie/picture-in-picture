const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// prompt to select media stream, pass to video element, play

async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
        
    } catch (error) {
        console.log('oops error', error);
    }
};

button.addEventListener('click', async ()=> {
    button.disabled = true;
    await videoElement.requestPictureInPicture();
    button.disabled = false;
});

selectMediaStream();