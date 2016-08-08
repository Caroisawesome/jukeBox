import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        const { props } = this;
        return (
            <div className="ui search fluid">
              <input
                 className="prompt"
                 type="text"
                 value={props.value}
                 onChange={props.onChange}
                 placeholder="Common passwords..." />
            </div>
        );
    }
}

export default SearchBar;
