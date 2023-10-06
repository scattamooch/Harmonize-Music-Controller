import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function Room() {
  const { roomCode } = useParams();

  const state = {
    votesToSkip: 2,
    guestCanPause: false,
    isHost: false,
  };

  function setState(data) {
    state.votesToSkip = data.votes_to_skip
    state.guestCanPause = data.guest_can_pause
    state.isHost = data.is_host
  }

  useEffect(() => {
    async function getRoomDetails() {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/get-room?code=" + roomCode);
            if (response.ok) {
                const data = await response.json();
                console.log("bing bong:", data);
                setState(data)
            } 
        } catch (error) {
            console.log("Caught the error: ", error)
        }
    }
    getRoomDetails();
    }, []);

  return (
    <div>
      <h3>Room Code: {roomCode}</h3>
      <p>Votes to Skip: {state.votesToSkip}</p>
      <p>Guest Can Pause: {state.guestCanPause.toString()}</p>
      <p>Host: {state.isHost.toString()}</p>
    </div>
  );
}

export default Room;


// Too far deprecated
// import React, { Component } from "react";

// export default class Room extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             votesToSkip: 2,
//             guestCanPause: false,
//             isHost: false,
//         };
//         this.roomCode = this.props.match.params.roomCode;
//     }
    
//     render () {
//         return(
//             <div>
//                 <h3>{this.roomCode}</h3>
//                 <p>Votes: {this.state.votesToSkip}</p>
//                 <p>Guest Can Pause: {this.state.guestCanPause}</p>
//                 <p>Host: {this.state.isHost}</p>
//             </div>
//         )
//     }
// }