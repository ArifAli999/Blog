import Head from 'next/head'
import PostCard from '../components/PostCard'
import { getPosts } from '../services';
import PostWidget from '../components/PostWidget';
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const variants = {
  visible: { opacity: 0.8 },
  hidden: { opacity: 0 },
}

export default function Home({ posts }) {
  return (
    <div className="container">
      <Head>
        <title>My blog</title>
        <meta name="description" content="The Riffy raff experience." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='columns is-flex'>
        <div className='post-container column is-full'>
          <div className='columns is-desktop is-gapless'  >
            {posts.map((post) =>

              <PostCard post={post.node} key={post.node.title} />



            )}
         
          </div>
        </div>
        {/**  <div className='column'>
    {/** <PostWidget/> 
      </div>
      */}

      </div>

    </div>
  )
}


export async function getStaticProps() {
  const posts = (await getPosts()) || [];


  return {
    props: {
      posts
    }
  }
}