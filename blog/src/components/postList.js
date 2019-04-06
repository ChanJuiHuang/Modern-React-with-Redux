import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import actions from '../redux/actions'
import UserHeader from './userHeader'

const { fetchPostsAndUsers } = actions

class PostList extends React.Component {
  componentDidMount () {
    const { fetchPostsAndUsers } = this.props
    fetchPostsAndUsers()
  }

  renderList () {
    const {
      blog: { posts }
    } = this.props

    return posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      )
    })
  }

  render () {
    return <div className="ui relaxed divide list">{this.renderList()}</div>
  }
}

const mapStateToProps = state => {
  return {
    blog: state.blog
  }
}

PostList.propTypes = {
  fetchPostsAndUsers: PropTypes.func,
  blog: PropTypes.shape({})
}

export default connect(
  mapStateToProps,
  { fetchPostsAndUsers }
)(PostList)
