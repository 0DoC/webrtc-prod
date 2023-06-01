import {io} from 'socket.io-client';

const socket = io("https://idocdevopsprojects.com/",{ forceNew: true, reconnectionAttempts: "Infinity", timeout : 10000});

export default socket;
