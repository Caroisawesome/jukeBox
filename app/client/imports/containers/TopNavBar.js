import './TopNavBar.less';
import React, { Component } from 'react';

class TopNavBar extends Component {
    render() {
        return (
            <div>
              <div className="top-nav-bar">
                <div className="ui container">
                  <h1 className="header">
                    JukeBox
                  </h1>
                </div>
              </div>
            </div>
        );
    }
}

export default TopNavBar;
