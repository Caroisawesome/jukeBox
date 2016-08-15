import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import App from './imports/App';
import Room from './imports/containers/RoomView';
import NearbyRooms from './imports/containers/NearbyRooms';
import NotFound from './imports/containers/NotFound';

import store from './imports/store';

// TESTING REDUX START
import { userSongs } from './imports/fakeData';
import { setUserSongs } from './imports/action';
store.dispatch( setUserSongs(userSongs) );
// TESTING REDUX ENDS




const Main = () => {
    return (
        <Provider store={store}>
          <Router history={browserHistory}>
            <Route path="/" component={App} >
                <IndexRoute component={NearbyRooms} />
                <Route path="/room/:roomId" component={Room}/>
                <Route path="*" component={NotFound}/>
            </Route>
          </Router>
        </Provider>
    );
};

Meteor.startup(() => {
    render(<Main />, document.getElementById('app'));
});
