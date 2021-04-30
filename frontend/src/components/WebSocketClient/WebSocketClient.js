import React, { useEffect, useState } from 'react';
import SockJsClient from 'react-stomp';

const WebSocketClient = ({ onUpdate, outgoingUpdate, partyId }) => {

    const [client, setClient] = useState();

    useEffect(() => {
        if(outgoingUpdate) {
            console.log(outgoingUpdate)
            client.sendMessage(`/ws/party-update/${partyId}`, outgoingUpdate);
        }
    }, [outgoingUpdate]);

    const SOCKET_URL = 'http://localhost:8080/ws';
    const topics =[`/topic/party-updates/${partyId}`];

    const onConnect = () => console.log("Connected with WS");
    const onDisconnect = () => console.log("Disconnected from WS");

    return(
        <SockJsClient
            url={SOCKET_URL}
            topics={topics}
            onConnect={onConnect}
            onDisconnect={onDisconnect}
            onMessage={onUpdate}
            debug={false}
            ref={setClient}
        />
    );
}
 
export default WebSocketClient;