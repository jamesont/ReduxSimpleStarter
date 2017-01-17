"use strict"

const React = require('react')

const VideoListItem = ({video}) => {
    //identical to video object in paramter
    // const video = props.video
    const imageUrl = video.snippet.thumbnails.default.url
    return (
        <div>
        <li className="list-group-item">
          <div className="video-list media">
            <div className="media-left">
              <img className="media-object" src={imageUrl} />
            </div>
            <div className="media-body">
              <div className="media-heading">
                  {video.snippet.title}
              </div>
            </div>
          </div>
        </li>
        </div>
    )
}

module.exports = {
    VideoListItem
}
