import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts =  () => {

    let postData =[
      {id:1, post:'Привет Сука',   likesCount:'0' },
      {id:2, post: 'React AAAAAP', likesCount:'23'}
    ];


    return(

      <div className={style.post}>
          <textarea placeholder='Enter the comment'></textarea>
                <button>Send</button>
                <button>Remove</button>
          
            <Post message={postData[0].post} likesCount={postData[0].likesCount}/>
            <Post message={postData[1].post} likesCount={postData[1].likesCount}/>
    
          
    
      </div>
      
    
    )
};
export default MyPosts