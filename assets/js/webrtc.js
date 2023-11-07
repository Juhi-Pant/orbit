// Initialize WebRTC
const configuration = { iceServers: [{ urls: 'stun:stun.l.google.com:19302' }] };
const peerConnection = new RTCPeerConnection(configuration);

// Handle ICE Candidate events
peerConnection.onicecandidate = function(event) {
  if (event.candidate) {
    // Send the ICE Candidate through your signaling server (Socket.io)
    socket.emit('ice-candidate', event.candidate);
  }
};

// Handle incoming ICE Candidate
socket.on('remoteice-candidate', candidate => {
  peerConnection.addIceCandidate(new RTCIceCandidate(candidate));
});

// Export if needed
export { peerConnection };
