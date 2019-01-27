import React from 'react'
import PropTypes from 'prop-types'

class SearchBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = { term: '' }
    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onInputChange (event) {
    this.setState({ term: event.target.value })
  }

  onFormSubmit (event) {
    event.preventDefault()
    this.props.onSubmit(this.state.term)
  }

  render () {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    )
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func
}

export default SearchBar
