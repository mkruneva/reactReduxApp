import { GET_POSTS, NEW_POST } from './types';
import axios from 'axios';

// each action is a function
// thunk middleware allows to call the dispatch function directly to make async requests
export const getPosts = () => dispatch => {
  // dispatch - promise resolver
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
      // .then(res => this.setState({ posts: res.data })); // dispatch data to reducer instead of setting state
      .then(res => dispatch({
        type: GET_POSTS,
        payload: res.data
      })); // dispatch dat to reducer instead of setting state
}

export const postPost = () => dispatch => {
  const post = {
    title: this.state.title,
    body: this.state.body
  }

  axios.post(`https://jsonplaceholder.typicode.com/posts`, post)
    // .then(res => console.log(res.data))
    .then(res => dispatch({
      type: NEW_POST,
      payload: res.data
    }))
}