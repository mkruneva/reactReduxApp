import { GET_POSTS, NEW_POST } from './types';
import axios from 'axios';

// each action is a function
// thunk middleware allows to call the dispatch function directly to make async requests
export const getPosts = () => dispatch => {   // dispatch - promise resolver
  console.log('1 get posts action');
  axios.get(`https://jsonplaceholder.typicode.com/posts`)
    // .then(res => this.setState({ posts: res.data })); // dispatch data to reducer instead of setting state
    .then(res => dispatch({
      type: GET_POSTS,
      payload: res.data
    })); // dispatch dat to reducer instead of setting state
}

export const newPost = (postData) => dispatch => {
  console.log('1 new post action');
  axios.post(`https://jsonplaceholder.typicode.com/posts`, postData)
    .then(res => dispatch({
      type: NEW_POST,
      payload: res.data
    }))
}