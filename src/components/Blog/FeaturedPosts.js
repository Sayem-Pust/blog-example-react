import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestPosts } from "../../redux/blog/actions";
import Loading from "../Loading";
import BlogList from "./BlogList";

export default function FeaturedPosts() {
  const dispatch = useDispatch();
  const onRequestPosts = () => dispatch(requestPosts());
  const state = useSelector((state) => state.requestPosts);
  useEffect(() => {
    onRequestPosts();
  }, []);

  const { posts, isPending } = state;

  if (isPending) {
    return <Loading />;
  }
  return <BlogList title="latest Posts" blog={posts.slice(0, 4)} />;;
}
