import React from "react";

const PostItem = ({ post, deletePost }) => {
  // const handleDelete = () => {
  //   delete2(post.id)
  // };

  return (
    <div>
      <h3>{post.id}</h3>
      <p>{post.title}</p>
      <p>{post.body}</p>
      <button type="button" onClick={() => deletePost(post.id)}>
        Delete post
      </button>
    </div>
  );
};

export default PostItem;
