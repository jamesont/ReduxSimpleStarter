"use strict"
// what is react? its a js library used to produced html in a browser
// react code is multiple individual components/views. snippets of code that produce
// html.
const React = require('react')
const Component = require('react').Component
const ReactDOM = require('react-dom')
const YTSearch = require('youtube-api-search')
const SearchBar = require('./components/search_bar')
const VideoList = require('./components/video_list').VideoList
const VideoDetail = require('./components/video_detail').VideoDetail
const API_KEY = 'AIzaSyCuSIJlUD3qM9N13H_K7F_w9KFBUC8bL38'
// components - js functions that produce html.
//do i need this component to update a state? ask when making a new component
// objectives: create new component that produces html.
// then inject it into the DOM.
//render = place the html on the page.
// this creates new component that should produce
// some html.

class App extends Component {
  constructor(props){
    super(props)

    this.state = { videos: []}

    YTSearch({key: API_KEY, term: "surfboards"}, (videos) =>  {
      //resolved as this.setState({videos: videos})
      this.setState({ videos })
    })
  }
  render(){
      return (
        <div>
          <SearchBar />
          <VideoDetail videos={this.state.videos[0]} />
          <VideoList videos={this.state.videos} />
        </div>
      )
    }
}

//now render it on the page:
ReactDOM.render(<App />, document.querySelector('.container'))
