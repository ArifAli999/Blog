import React from 'react'
import moment from 'moment'
import Link from 'next/link';
import { motion } from "framer-motion";

const PostCard = ({ post }) => {
  console.log(post)
  return (
    

    <div className='post-card-container column'>


      <div className='image-container'> <motion.img whileHover={{
        opacity: 0.4,
        scale: 0.9,
        transition: { duration: 1 },
      }} whileTap={{ scale: 1, opacity: 1 }}
        src={post.featuredImage.url} alt={post.title} className="post-fimg">

      </motion.img></div>


      <ul className='flexer-ul'>
        <li className='flexed'>
          <span className='date'>{moment(post.createdAt).format('MM')}</span>
        </li>
        <li className='flexed'>
          <p className='post-excerpt'>
            {post.excerpt}
          </p>
        </li>

      </ul>





      <Link href={`/post/${post.slug}`}>
        <button className='transparent'> </button>
      </Link>



    </div>

  )
}

export default PostCard;