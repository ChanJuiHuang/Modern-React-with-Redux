import React from 'react'
import faker from 'faker'
import PropTypes from 'prop-types'

const CommentDetail = (props) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={faker.image.avatar()} alt="avatar" />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date">Today 6:00PM</span>
        </div>
        <div className="text">Nice blog post!</div>
      </div>
    </div>
  )
}

CommentDetail.propTypes = {
  author: PropTypes.string
}

export default CommentDetail
