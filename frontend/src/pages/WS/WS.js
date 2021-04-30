import React, { useState } from 'react';
import SockJsClient from 'react-stomp';

import useInput from 'hooks/useInput';

const SOCKET_URL = 'http://localhost:8080/ws';

const WS = () => {
  const [messageFromWS, setMessageFromWS] = useState();
  const [client, setClient] = useState();

  let onConnected = () => {
    console.log("Connected!!")
  }

  let onMessageReceived = (msg) => {
    setMessageFromWS(msg);
  }

  const { value: message, bind: bindMesssage, reset: resetMessage } = useInput('');
  const [error, setError] = useState();
  
  const handleSubmit = event => {
    event.preventDefault();
    client.sendMessage('/ws/party-update', message)
  }

  return (
    <div>
      <SockJsClient
        url={SOCKET_URL}
        topics={['/topic/party-updates']}
        onConnect={onConnected}
        onDisconnect={() => console.log("Disconnected!")}
        onMessage={msg => onMessageReceived(msg)}
        debug={true}
        ref={setClient}
      />
      <div className="has-text-light">{messageFromWS}</div>

        <form onSubmit={handleSubmit}>
          <label className="has-text-light with-space-on-right">
            Message:
          </label> 
          <input type="text" {...bindMesssage} />

          <input type="submit" value="Submit" />
        </form>
    </div>
  );
}

export default WS;