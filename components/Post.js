import React from 'react'
import Link from 'next/link'
import styles from '../styles/PostList.module.css'

export const Post = ({post}) => {
    return (
        <Link href={`/posts/${post.id}`}>
            <a className={styles.card}>
            <h1>{post.title}</h1>
            </a>
         
        </Link>
    )
}
