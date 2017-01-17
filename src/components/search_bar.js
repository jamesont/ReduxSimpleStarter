const React = require('React')
const Component = require('React').Component

class SearchBar extends Component {
    constructor(props){
        super(props)
        // can set this string to a default value
        this.state = { term: 'Hellz Ya'}
    }
    render() {
        return (
            <div>
              <input
              //value turns this into a controlled component
                value = { this.state.term }
                onChange={ e => this.setState({ term: e.target.value }) }/>
            </div>
        )
    }
}

module.exports = SearchBar
//state - plain jsObj that records events.
