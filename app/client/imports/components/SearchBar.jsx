import './SearchBar.less';
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
                 placeholder="song search..." />

                 <button className="ui button" onClick={this.props.onSubmit}>Search</button>

            </div>
        );
    }

}

export default SearchBar;
