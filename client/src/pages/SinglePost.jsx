import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import axios from "axios";
import moment from "moment";
import { Menu } from "../components/Menu";

const SinglePost = () => {
  const [post, setPost] = useState({});
  const location = useLocation();
const navigate = useNavigate()
  const postId = location.pathname.split("/")[2];
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [postId]);

  const handleDelete = async()=>{
    try {
    await axios.delete(`/posts/${postId}`)
    navigate("/")

    } catch (error) {
      
    }

  }
  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html,"text/html")
    return doc.body.textContent
  }
  return (
    <div className="single">
      <div className="content">
        <img src={`../upload/${post?.img}`} alt="" />
        <div className="user">
{ post.userImg && <img src={post.userImg} alt=""/>}
          <div className="info">
            <span>{post?.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser?.username === post?.username && (
            <div className="edit">
              <Link to={`/write?edit=2`} state={post}>
                <img src="/images/edit.png" />
              </Link>
              <img onClick={handleDelete} src="/images/delete.png" />
            </div>
          )}
        </div>
        <h1>{post.title}</h1>

        {getText(post.desc)}
      </div>
      <Menu cat={post.cat}/>
    </div>
  );
};

export default SinglePost;
