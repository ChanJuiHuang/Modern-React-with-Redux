import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetail from './CommentDetail'
// import faker from 'faker'

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Sam" />
      <CommentDetail author="John" />
      <CommentDetail author="Alex" />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
