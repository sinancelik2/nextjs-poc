import React from 'react'
import { Post } from './Post'
import styles from '../styles/PostList.module.css'

export const PostList = ({posts}) => {
    return (
        <div>
         {posts.map((post)=>(
          <div className={styles.grid} key={post.id}>
              <Post post={post} />
          </div>
        ))}

        </div>
    )
}
