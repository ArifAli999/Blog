 import React from 'react'
 import { getPostDetails, getPosts } from '../../services';
 import PostWidget from '../../components/PostWidget';
 import PostDetail from '../../components/PostDetail';
 import Author from '../../components/Author';
 import Comments from '../../components/comments';
 import CommentsForm from '../../components/CommentsForm';
 import Router from 'next/router';
 import { useRouter } from 'next/router';



 const PostDetails = ({ post }) => {
    const router = useRouter();
  
    if (router.isFallback) {
      return <Loader />;
    }
  console.log(post)
    return (
      <>
        <div className="post-slug">
       
            <div className="col-span-1 lg:col-span-8">
              <PostDetail post={post} />
            </div>
           {/**  <div className="col-span-1 lg:col-span-4">
              <div className="relative lg:sticky top-8">
                <PostWidget slug={post.slug} categories={post.categories.map((category) => category.slug)} />
              </div>
            </div>*/}
        </div>
      </>
    );
  };
  export default PostDetails;
  
  // Fetch data at build time
  export async function getStaticProps({ params }) {
    const data = await getPostDetails(params.slug);
    return {
      props: {
        post: data,
      },
    };
  }
  
  // Specify dynamic routes to pre-render pages based on data.
  // The HTML is generated at build time and will be reused on each request.
  export async function getStaticPaths() {
    const posts = await getPosts();
    return {
      paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
      fallback: true,
    };
  }