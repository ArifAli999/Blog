import Head from 'next/head'
import PostCard from '../components/PostCard'
import { getPosts } from '../services';
import PostWidget from '../components/PostWidget';
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import moment from 'moment';
import Link from 'next/link';


const variants = {
  visible: { opacity: 0.8 },
  hidden: { opacity: 0 },
}


export default function Home({ posts }) {




const swiperItems = posts.map((p) => {
  return (
    <SwiperSlide key={p.node.slug}  className="  h-full bg-red   ml-5 mt-10 !w-96 flex flex-col gap-0 "
  >
   <main className='w-full '>
      <img whileHover={{
        opacity: 0.4,
        scale: 0.9,
        transition: { duration: 1 },
      }} whileTap={{ scale: 1, opacity: 1 }}
      
        src={p.node.featuredImage.url} alt={p.node.title} 
        className="w-full md:w-full h-96 object-cover">

      </img>
      </main>


      <main className='w-fit flex h-full items-center  justify-between gap-10 p-0.5 '>
        <section className='text-center p-3 inline-block'>
          <span className='text-white text-4xl inline-block align-middle'>{moment(p.node.createdAt).format('MM')}</span>
        </section>

        <section className='w-full h-full flex items-center mb-5  p-2'>
          <p className='text-sm break-words	inline-block align-middle  text-white'>
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
      <meta name="description" content="The Riffy raff experience." />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className=' bg-black p-0 min-h-screen'>

        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          className=' w-screen  md:w-full  z-99 min-h-96 cust grid grid-flow-col auto-cols-max p-0 '>

          {swiperItems}

        </Swiper>

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