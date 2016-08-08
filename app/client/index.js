import React from 'react';
import { Provider } from 'react-redux';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import App from './imports/App.js';
import store from './imports/store.js';

// testing stuff
import { userSongs } from './imports/fakeData.js';
import { setUserSongs } from './imports/action';

store.dispatch( setUserSongs(userSongs) );

const Main = () => {
    return (
        <Provider store={store}>
          <App />
        </Provider>
    );
};

Meteor.startup(() => {
    render(<Main />, document.getElementById('app'));
});
