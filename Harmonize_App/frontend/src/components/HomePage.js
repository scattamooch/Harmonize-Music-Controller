import React, {Component} from "react";
import {render} from "react-dom";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import { BrowserRouter as Router, Routes, Route, Link, Redirect } from "react-router-dom"
import Room from "./Room";

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
              <Routes>
                <Route exact path="/" element={<p>This is the home page</p>} />
        
                <Route path="/join" element={<RoomJoinPage />} />
        
                <Route path="/create" element={<CreateRoomPage />} />

                <Route path="/room/:roomCode" element={<Room />} />
              </Routes>
            </Router>
          );
    }
}