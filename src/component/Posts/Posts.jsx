import React from 'react'

const Posts = ({ post }) => {
    return (
        <div className='border p-4 rounded-lg shadow-md'>
            <h2 className='text-2xl font-bold mb-2'>{ post.title }</h2>
            <p>{ post.content }</p>

        </div>
    )
}

export default Posts
