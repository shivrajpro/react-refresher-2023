import { useEffect, useState } from "react";

import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList() {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    async function fetchPosts() {
      setIsFetching(true);
      const response = await fetch('http://localhost:8080/posts');
      if(!response.ok) console.log('>> error in fetching posts');
      const resData = await response.json();

      setPosts(resData.posts);
      setIsFetching(false);
    }

    fetchPosts();
  }, [])
  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {/* <Post author="Manuel" body="Check out the full course!" /> */}
          {posts.map((post) => (
            <Post key={Math.random()} author={post.author} body={post.body} />
          ))}
        </ul>
      )}

      {!posts.length && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
