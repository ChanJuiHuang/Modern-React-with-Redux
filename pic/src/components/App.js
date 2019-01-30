import React from 'react'
import unsplashApi from '../api/unsplashApi'
import SearchBar from './SearchBar'
import ImageList from './ImageList'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.onSearchSubmit = this.onSearchSubmit.bind(this)
    this.state = { images: [] }
  }

  async onSearchSubmit (term) {
    const res = await unsplashApi.get('search/photos', {
      params: {
        query: term
      }
    })

    this.setState({ images: res.data.results })
  }

  render () {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    )
  }
}

export default App
