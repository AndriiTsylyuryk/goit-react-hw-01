import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts, title, deletePost }) => {
  return (
    <div>
      <h1>{title}</h1>
      {posts.map((post) => (
        <PostItem post={post} key={post.id} deletePost={deletePost} />
      ))}
    </div>
  );
};

export default PostList;
