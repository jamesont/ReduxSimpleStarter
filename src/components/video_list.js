"use strict"
const React = require('react')
const VideoListItem = require('./video_list_item')

const VideoList = (props) => {
    const videoItems = props.videos.map( (video) => {
        return <VideoListItem key={video.etag} video={video} />
    })

    return (
        <div>
            <ul className="col-md-4 list-group">
              {videoItems}
            </ul>
        </div>
    )
}

module.exports = {
    VideoList: VideoList
};
