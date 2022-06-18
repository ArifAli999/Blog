import Head from 'next/head'
import PostCard from '../components/PostCard'
import { getPosts } from '../services';
import PostWidget from '../components/PostWidget';
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import moment from 'moment';
import Link from 'next/link';
import Image from 'next/image';
import {AiOutlineArrowRight} from 'react-icons/ai'


const variants = {
  visible: { opacity: 0.8 },
  hidden: { opacity: 0 },
}


export default function Home({ posts }) {




const swiperItems = posts.map((p) => {
  return (
    <SwiperSlide key={p.node.slug}  className=" md:!w-96 !w-screen ml-0 md:ml-5 md:mt-0  p-4   mb-0 flex  flex-col gap-2 relative "
  >
   <main className=' w-full    relative h-full bg-no-repeat bg-cover '>
      <Image  
        width={500} height={600} layout="responsive" objectFit="fit"
        src={p.node.featuredImage.url} alt={p.node.title} 
        className=" md:w-full  object-fill rounded"
        quality={100}
        />
                <div className="group absolute top-0 right-0 bottom-0 left-0 w-full h-full  bg-fixed opacity-0 hover:opacity-80 transition duration-300 ease-in-out bg-purple-700 flex items-center justify-center">
                  <p className='text-4xl z-99 p-4 text-purple-50 uppercase font-black text-center group-hover:-translate-y-6	cursor-pointer hover:text-black opacity-100 transition-all duration-700 '><span className='text-6xl p-2'>&apos;</span>READ MORE 
                  <span className='text-6xl p-2'>&apos;</span>
                  </p>
                </div>

     
      </main>


      <main className='relative   md:w-full flex h-full items-center justify-between -mt-2 md:mt-0 gap-2 md:gap-2 md:p-1 p-0'>
        <section className='text-center p-1 md:p-2 inline-block'>
          <span className='text-violet-600 text-3xl font-black  md:text-4xl inline-block align-middle'>{moment(p.node.createdAt).format('MM')}</span>
        </section>

        <section className='w-full break-words  md:w-full h-full flex items-center mt-0  md:p-3 p-2'>
          <p className='text-sm leading-loose	md:leading-tight align-middle font-light   font-rale  text-gray-200'>
          {p.node.excerpt}
          </p>
        </section>
     
      </main>
      <span className='absolute right-10 md:right-2 bottom-0 text-white'>
          <AiOutlineArrowRight size={24}/>
        </span>
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
    <div className=' bg-black p-0 min-h-screen w-full flex flex-col py-0 justify-between h-full'>

    <div className='border-b mb-0 border-gray-600 p-4 w-full flex justify-between items-center shadow-sm drop-shadow-lg shadow-gray-700'>
    
    <span className='text-purple-100 font-extralight text-lg font-rale group cursor-pointer hover:text-white'>the &nbsp;<span className='text-violet-400 group-hover:text-violet-600 group-hover:-top-1 transition-all duration-500 ease-in-out font-bold relative top-1'>&apos;purple&apos;</span>&nbsp; experience</span>
    </div>
    <div className='p-4'>

        <Swiper
          slidesPerView="auto"
          spaceBetween={10}
          className='   grid grid-flow-col auto-cols-max p-0 gap-2 w-full h-full '>

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