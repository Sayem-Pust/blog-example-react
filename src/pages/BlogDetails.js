import React, {useEffect} from "react";
import {useParams, useHistory} from 'react-router-dom'
import { connect } from "react-redux";
import { requestPosts } from "../redux/blog/actions";
import {requestComments} from '../redux/comment/actions'
import Loading from "../components/Loading";
import image from "../assets/book.jpg";
import Comment from '../components/Comment'

function ProductDetails({ onRequestPosts, postState, commentState, onRequestComments }) {

  useEffect(() => {
    console.log("Rendered!");
    onRequestPosts();
    onRequestComments(id);
  }, []);
  const { id } = useParams();
  const history = useHistory();
  const { posts } = postState;
  const { comments } = commentState;
  console.log(comments)
  const post = posts.find((item) => item.id === parseInt(id));
  if (posts.length === 0) {
    return <Loading />;
  } else {
    const { title, body } = post;
    return (
      <div>
        <section className="single-post">
          <img src={image} alt={title} className="single-post-image" />
          <article>
            <h1>{title}</h1>
            <p>{body}</p>

            <button
            className="btn btn-primary btn-block"
            onClick={() => {
              history.push("/blog");
            }}
          >
            Back to posts
          </button>
          </article>
        </section>
        <div className="section">
          <h1 style={{textAlign:"center"}}>Comments</h1>
          <div className="posts-center">
            {comments.map((comment, index) => (
              <Comment key={index} {...comment} serial={index} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    postState: state.requestPosts,
    commentState: state.requestComments,
  };
}
const mapDispatchToProps = dispatch => {
  return {
    onRequestPosts: () => dispatch(requestPosts()),
    onRequestComments: (id) => dispatch(requestComments(id))
  };
  
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
