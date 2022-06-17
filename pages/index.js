import Head from 'next/head'
import PostCard from '../components/PostCard'
import { getPosts } from '../services';
import PostWidget from '../components/PostWidget';
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import moment from 'moment';
import Link from 'next/link';
import Image from 'next/image';


const variants = {
  visible: { opacity: 0.8 },
  hidden: { opacity: 0 },
}


export default function Home({ posts }) {




const swiperItems = posts.map((p) => {
  return (
    <SwiperSlide key={p.node.slug}  className="   md:!h-full md:!w-96 !w-screen ml-0 md:ml-5 md:mt-0  p-0   mb-0 flex flex-col gap-0 "
  >
   <main className=' w-full bg-red-500 relative'>
      <Image  
        width={300} height={400} layout="responsive" objectFit="fill"
        src={p.node.featuredImage.url} alt={p.node.title} 
        className="!h-60 md:w-full  object-fill">

      </Image>
      </main>


      <main className=' md:w-full flex h-full items-center   justify-between gap-0 md:gap-10 md:p-1 p-4 '>
        <section className='text-center p-3 md:p-3 inline-block'>
          <span className='text-white text-3xl font-black md:text-4xl inline-block align-middle'>{moment(p.node.createdAt).format('MM')}</span>
        </section>

        <section className='w-5/6 md:w-full h-full flex items-center mb-5  p-4'>
          <p className='text-sm 	 align-middle font-extralight  text-white'>
          {p.node.excerpt}
          </p>
        </section>
     
      </main>
    </SwiperSlide>
  )
})
  console.log({posts})
  return (

      <><Head>
      <title>My blog</title>
     <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
     <meta name="theme-color" content="#000"/>

      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className=' bg-black p-0 min-h-screen w-full flex flex-col py-0'>
    <div className='border-b mb-0 border-gray-600 p-4 w-full flex justify-between items-center'>
    
    <span className='text-purple-100 font-light text-lg'>the   <span className='text-purple-600 font-bold'>&apos;purple&apos;</span> experience</span>
    </div>
    <div className='p-4'>

        <Swiper
          slidesPerView="auto"
          spaceBetween={10}
          className='   !grid !grid-flow-col !auto-cols-max p-0 !gap-2 w-full h-full '>

          {swiperItems}

        </Swiper>
        </div>
        {/**  <div className='column'>
{/** <PostWidget/>
  </div>
  */}

      </div></>


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