import React, { Component } from 'react';
import TopNavBar from './containers/TopNavBar.js';
import Room from './containers/RoomView';


class App extends Component {
    render() {
        console.log('CHILDREN', this.props.children);
        return (
            <div className="wrapper">
              <TopNavBar />


              <div className="ui container">
                    {this.props.children}
              </div>

            </div>
        );
    }
}

export default App;
