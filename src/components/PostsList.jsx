import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css"

function PostsLIst(props) {
  return (
    <>
    <NewPost/>    
    <ul className={classes.posts} >
      <Post author="Shivraj" body="React.js is awsome" />
      <Post author="Maxmilian" body="But I love Angular!" />
    </ul>
    </>
  );
}

export default PostsLIst;
