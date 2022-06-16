import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { getRecentPosts, getSimilarPosts } from '../services';
import Link from 'next/link';

const PostWidget = ({ categories, slug }) => {
    const [relatedPosts, setRelatedPosts] = useState([]);

    useEffect(() => {
        if (slug) {
            getSimilarPosts(categories, slug)
                .then((result) => setRelatedPosts(result))
        }
        else {
            getRecentPosts()
                .then((result) => setRelatedPosts(result))
        }
    }, [slug])
    return (
        <div className='post-wid'>
        
        <h3 className='text-xl'>
            {slug ? 'Related Posts' : "Recent Posts"}
        </h3>
        {relatedPosts.map((post) => (
            <div key={post.title} className="sidewid">
                <div className='img-flex'>
                    <img src={post.featuredImage.url} height={30} width={30}></img>
                </div>
                <div className='date-flex'>
                    <p>{moment(post.createdAt).format('DD,MM,YYYY')}</p>
                </div>

                <Link href={`/post/${post.slug}`} key={post.title} className="text-md">
                    {post.title}
                </Link>
                </div>
        ))}


        </div>
    )
}

export default PostWidget