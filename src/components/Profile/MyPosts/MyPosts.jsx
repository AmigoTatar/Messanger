import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts =  () => {
    return(

      <div className={style.post}>My posts
          <textarea placeholder='Enter the comment'></textarea>
                <button>Send</button>
                <button>Remove</button>
          
            <Post message='Привет Сука'/>
            <Post message='React app'/>
    
          
    
      </div>
      
    
    )
};
export default MyPosts