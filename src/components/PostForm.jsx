import React, { useState } from "react";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const handleClick = (event) => {
    event.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: "", body: "" });
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Post name"
          value={post.title}
          onChange={(event) => setPost({ ...post, title: event.target.value })}
        />
        <input
          type="text"
          placeholder="Postbody"
          value={post.body}
          onChange={(event) => setPost({ ...post, body: event.target.value })}
        />
        <button onClick={handleClick}>Create post</button>
      </form>
    </div>
  );
};

export default PostForm;
