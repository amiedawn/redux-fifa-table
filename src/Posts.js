import { getValue } from '@testing-library/user-event/dist/utils';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPosts} from './action';

function Posts() {
  const dispatch = useDispatch();
  const posts = useSelector( state => state);
  
  useEffect (() => {
   dispatch(fetchPosts());
  }, [dispatch]);

  const renderPosts = () => {
    if (posts.loading) {
      return <h1>Loading...</h1>
      console.log("loading");
    }
      return posts.items.map(el=> {
        console.log("posts");
        return <h3 key={el.fifa_id}>{el.venue}</h3>; // this is where you will set up the table
      })

  }

  return (
    <div>
      {renderPosts()}
    </div>
  );
};

export default Posts;