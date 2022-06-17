import React from 'react'
import moment from 'moment'
import Link from 'next/link';
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';


const PostCard = ({ post }) => {
  console.log(post)
  return (
    


<SwiperSlide className=' bg-red-500    w-full flex-1  '>

    <div className='flex-1'>
      <img whileHover={{
        opacity: 0.4,
        scale: 0.9,
        transition: { duration: 1 },
      }} whileTap={{ scale: 1, opacity: 1 }}
      
        src={post.featuredImage.url} alt={post.title} 
        className="w-full md:w-96 h-96 object-cover">

      </img>
      </div>


      <div className='w-full flex  justify-center h-fit '>
        <div className=''>
          <span className='date'>{moment(post.createdAt).format('MM')}</span>
        </div>

        <div className='w-full h-full '>
          <p className='text-base break-words	  text-white'>
          {post.excerpt}
          </p>
        </div>
        <Link href={`/post/${post.slug}`}>
        <button className=''> Read More</button>
      </Link>
      </div>

    



  


      </SwiperSlide>

  )
}

export default PostCard;