import React from "react";
import {Link} from 'react-router-dom'
import Hero from '../components/Hero'
import Featured from '../components/Blog/FeaturedPosts'

export default function Home() {
  return <>
  <Hero>
    <Link to="/blog" className="btn btn-primary btn-hero">Blog</Link>
    </Hero>
    <Featured />
    </>;
}
