import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPosts } from '../actions/postActions';

class Posts extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  componentWillReceiveProps(nextProp) {
    if (nextProp.onePost) {
      this.props.posts.unshift(nextProp.onePost)
    }
  }

  render() {
    const postItems = this.props.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ))

    return (
      <div>
        <h1>Posts</h1>
        { postItems }
      </div>
    )
  }
}

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  onePost: PropTypes.object
}

const mapStateToProps = state => ({
  posts: state.posts.items, //taken from rootReducer -> combineReducers -> postReducer
  onePost: state.posts.item
})

// connect maps state to properties
export default connect(mapStateToProps, { getPosts })(Posts);
