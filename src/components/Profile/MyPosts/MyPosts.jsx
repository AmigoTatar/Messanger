import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {

  let postData = [
    { id: 1, post: 'Привет Сука', likesCount: '0' },
    { id: 2, post: 'React AAAAAP', likesCount: '23' }
  ];

  let postElement = postData 
  .map ( postData => <Post message={postData.post} likesCount={postData.likesCount} /> )

  return (

    <div className={style.post}>
      <textarea placeholder='Enter the comment'></textarea>
      <button>Send</button>
      <button>Remove</button>

      {postElement}
  

    </div>


  )
};
export default MyPosts