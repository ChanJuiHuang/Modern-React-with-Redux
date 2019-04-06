import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class UserHeader extends React.Component {
  render () {
    const { user } = this.props

    if (!user) {
      return null
    }
    return <div className="header">{user.name}</div>
  }
}

const mapStateToProps = (state, ownProps) => {
  const {
    blog: { users }
  } = state
  const user = users.find(user => user.id === ownProps.userId)

  return { user }
}

UserHeader.propTypes = {
  user: PropTypes.shape({})
}

export default connect(mapStateToProps)(UserHeader)
