import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux'
import {requestPosts} from '../redux/blog/actions'
import Loading from '../components/Loading'
import BlogList from '../components/Blog/BlogList'


export default function Blog() {
  const dispatch = useDispatch();
const onRequestPosts = () => dispatch(requestPosts());
const state = useSelector((state) => state.requestPosts);
  useEffect(() => {
    onRequestPosts();
  }, [])

const { posts, isPending } = state;

  if (isPending) {
    return <Loading />;
  }
  return <BlogList title="All Posts" blog={posts} />;
}

