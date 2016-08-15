import React, { Component } from 'react';

class SongCard extends Component {
    render() {
        console.log("this.props", this.props);

        return (
            <div className="ui card">

              <div className="image">
                {this.renderImage()}
              </div>

              {this.renderSongInfo()}

              {this.renderControls()}
            </div>
        );
    }

    renderImage() {
        const url = this.props.album.images[0].url;
        return (
            <img alt="album cover" src={url}/>
        );
    }

    renderSongInfo() {
        const { name, artists } = this.props;
        return (
            <div className="content">
              <a className="header">{name}</a>
              <div className="meta">
                {artists.map(a => a.name).join(", ")}
              </div>
            </div>
        );
    }

    renderControls() {
        return (
            <div className="extra content">
              <div className="ui button fluid">
                <i className="plus icon"></i>
                Add to Que
              </div>
            </div>
        );
    }
}

export default SongCard;
