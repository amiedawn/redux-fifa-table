import React, {useEffect} from 'react';
import Axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPosts} from './action';

function Posts() {
  const dispatch = useDispatch();
  const posts = useSelector( state => state);
  
  useEffect (() => {
   dispatch(fetchPosts())
  }, [])

  return (
    <div>
      {posts.map(el => {
        return <h3>{el.location}</h3> // this is where you will set up the table
      })}
    </div>
  );
}

export default Posts;