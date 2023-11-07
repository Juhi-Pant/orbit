const APP_ID = "6b343922575947cba48857b262a2df7e"
const TOKEN = "007eJxTYGASyLCtfJBbmB44++P1OT4+b2/OfH809l7Lms0h8iV73f0VGMySjE2MLY2MTM1NLU3Mk5MSTSwsTM2TjMyMEo1S0sxT8/W9UhsCGRk01q9gYIRCEJ+FITcxM4+BAQBfvB9F"
const CHANNEL = "main"

const client = AgoraRTC.createClient({mode:'rtc', codec:'vp8'})

let localTracks = []
let remoteUsers = {}

let videoStreamCount = 0;
const MAX_VIDEO_STREAMS = 4;

/*let joinAndDisplayLocalStream = async () => {

    client.on('user-published', handleUserJoined)
    
    client.on('user-left', handleUserLeft)
    
    let UID = await client.join(APP_ID, CHANNEL, TOKEN, null)

    localTracks = await AgoraRTC.createMicrophoneAndCameraTracks() 

    let player = `<div class="video-player" id="user-${UID}"></div>`;
    document.querySelector('.connect-video').innerHTML = player;
    localTracks[1].play(`user-${UID}`)
    
    await client.publish([localTracks[0], localTracks[1]])
}



let joinStream = async () => {
    await joinAndDisplayLocalStream();
    document.getElementById('join-btn').style.display = 'none';
    document.getElementById('stream-controls').style.display = 'flex';
};

let handleUserJoined = async (user, mediaType) => {
    console.log("Handling user join for UID:", user.uid, "media type:", mediaType);
    
    remoteUsers[user.uid] = user;
    await client.subscribe(user, mediaType);

    if (mediaType === 'video') {
        let slides = document.querySelectorAll('.slick-active.slide');
        for (let slide of slides) {
            if (!slide.querySelector('.video-player')) {
                let videoDiv = document.createElement('div');
                videoDiv.className = 'video-player';
                videoDiv.id = `user-${user.uid}`;

                slide.innerHTML = '';
                slide.appendChild(videoDiv);

                user.videoTrack.play(`user-${user.uid}`);
                break;
            }
        }
    }

    if (mediaType === 'audio') {
        user.audioTrack.play();
    }

};

let handleUserLeft = async (user) => {
    delete remoteUsers[user.uid];
    let videoContainer = document.getElementById(`user-${user.uid}`);
    if (videoContainer) {
        videoContainer.remove();
    }
};

let leaveAndRemoveLocalStream = async () => {
    for(let i = 0; localTracks.length > i; i++){
        localTracks[i].stop()
        localTracks[i].close()
    }

    await client.leave()
    document.getElementById('join-btn').style.display = 'block'
    document.getElementById('stream-controls').style.display = 'none'
    document.getElementById('video-streams').innerHTML = ''
}

let toggleMic = async (e) => {
    if (localTracks[0].muted){
        await localTracks[0].setMuted(false)
        //e.target.innerText = 'Mic on'
    }else{
        await localTracks[0].setMuted(true)
        //e.target.innerText = 'Mic off'
        
    }
}

let toggleCamera = async (e) => {
    if(localTracks[1].muted){
        await localTracks[1].setMuted(false)
        //e.target.innerText = 'Camera on'
    }else{
        await localTracks[1].setMuted(true)
        //e.target.innerText = 'Camera off'
    }
}

document.getElementById('join-btn').addEventListener('click', joinStream)
document.getElementById('leave-btn').addEventListener('click', leaveAndRemoveLocalStream)
document.getElementById('mic-btn').addEventListener('click', toggleMic)
document.getElementById('camera-btn').addEventListener('click', toggleCamera)*/


let joinAndDisplayLocalStream = async () => {

    client.on('user-published', handleUserJoined)
    
    client.on('user-left', handleUserLeft)
    
    let UID = await client.join(APP_ID, CHANNEL, TOKEN, null)

    localTracks = await AgoraRTC.createMicrophoneAndCameraTracks() 

    let player = `<div class="video-player" id="user-${UID}"></div>`;
    document.querySelector('.connect-video').innerHTML = player;
    localTracks[1].play(`user-${UID}`)
    
    await client.publish([localTracks[0], localTracks[1]])
}

let isStreamActive = () => {
    // Check if there's an active stream flag in localStorage
    return localStorage.getItem('streamActive') === 'true';
};

let setStreamActive = (isActive) => {
    // Set the active stream flag in localStorage
    localStorage.setItem('streamActive', isActive ? 'true' : 'false');
};

let joinStream = async () => {
    if (videoStreamCount < MAX_VIDEO_STREAMS) {
        if (!isStreamActive()) {
            setStreamActive(true);
            window.addEventListener('beforeunload', () => {
                // When the tab is closed, clear the stream active flag
                setStreamActive(false);
            });
            await joinAndDisplayLocalStream();
            document.getElementById('join-btn').style.display = 'none';
        } else {
            console.log('Stream already active in another tab.');
            document.getElementById('join-btn').disabled = true;
            alert('A stream is already active in another tab. Please close the other stream to start a new one.');
        }
    } else {
        console.log('Cannot join stream: maximum number of video streams reached.');
        document.getElementById('join-btn').disabled = true;
        alert('The maximum number of participants is already reached.');
    }
};



let handleUserJoined = async (user, mediaType) => {
    console.log("Handling user join for UID:", user.uid, "media type:", mediaType);
    
    remoteUsers[user.uid] = user;
    await client.subscribe(user, mediaType);

    if (mediaType === 'video') {
        if (videoStreamCount < MAX_VIDEO_STREAMS) {
            let slides = document.querySelectorAll('.slick-active.slide');
            for (let slide of slides) {
                if (!slide.querySelector('.video-player')) {
                    let videoDiv = document.createElement('div');
                    videoDiv.className = 'video-player';
                    videoDiv.id = `user-${user.uid}`;

                    slide.innerHTML = '';
                    slide.appendChild(videoDiv);

                    user.videoTrack.play(`user-${user.uid}`);
                    videoStreamCount++;
                    break;
                }
            }
        } else {
            console.log('Maximum video streams reached. New video not allowed.');
            
        }
    }

    if (mediaType === 'audio') {
        user.audioTrack.play();
    }
};



let handleUserLeft = async (user) => {
    delete remoteUsers[user.uid];
    let videoContainer = document.getElementById(`user-${user.uid}`);
    if (videoContainer) {
        videoContainer.remove();
        if (videoStreamCount > 0) {
            videoStreamCount--;  
        }
    }
};


let leaveAndRemoveLocalStream = async () => {
    for(let i = 0; localTracks.length > i; i++){
        localTracks[i].stop()
        localTracks[i].close()
    }
    setStreamActive(false);
    await client.leave()
    document.getElementById('join-btn').style.display = 'block'
    document.getElementById('stream-controls').style.display = 'none'
    document.getElementById('video-streams').innerHTML = ''
}

let toggleMic = async (e) => {
    if (localTracks[0].muted){
        await localTracks[0].setMuted(false)
        //e.target.innerText = 'Mic on'
    }else{
        await localTracks[0].setMuted(true)
        //e.target.innerText = 'Mic off'
        
    }
}

let toggleCamera = async (e) => {
    if(localTracks[1].muted){
        await localTracks[1].setMuted(false)
        //e.target.innerText = 'Camera on'
    }else{
        await localTracks[1].setMuted(true)
        //e.target.innerText = 'Camera off'
    }
}



document.getElementById('join-btn').addEventListener('click', joinStream)
document.getElementById('leave-btn').addEventListener('click', leaveAndRemoveLocalStream)
document.getElementById('mic-btn').addEventListener('click', toggleMic)
document.getElementById('camera-btn').addEventListener('click', toggleCamera)
