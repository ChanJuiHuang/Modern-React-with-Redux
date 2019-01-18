import React from 'react'
import PropTypes from 'prop-types'

const CommentDetail = (props) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={props.avatar} alt="avatar" />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date">{props.timeAgo}</span>
        </div>
        <div className="text">{props.content}</div>
      </div>
    </div>
  )
}

CommentDetail.propTypes = {
  author: PropTypes.string,
  timeAgo: PropTypes.string,
  content: PropTypes.string,
  avatar: PropTypes.string
}

export default CommentDetail
