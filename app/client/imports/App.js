import React, { Component } from 'react';
import TopNavBar from './containers/TopNavBar.js';
import Room from './containers/RoomView';


class App extends Component {
    render() {
        return (
            <div className="wrapper">
              <TopNavBar />


              <div className="ui container">
                <Room />
              </div>

            </div>
        );
    }
}

export default App;
