import React, { useRef } from "react";
import { useState } from "react";

import PostItem from "./PostItem";
import PostList from "./PostList";
import PostForm from "./PostForm";
import Select from "./Select";
import Input from "./Input";

const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: "JS", body: "Desc" },
    { id: 2, title: "JS2", body: "Desc" },
    { id: 3, title: "JS3", body: "Desc" },
  ]);

  const [selectedSort, setSelectedSort] = useState("");

  const [search, setSearch] = useState("");

  function getSortedPosts() {
    console.log("function executed");
    if (selectedSort) {
      return [...posts].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    }
    return posts;
  }

  const sortedPosts = getSortedPosts();

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id != id));
    if (posts.length) {
      console.log("no posts");
    }
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  };

  return (
    <div>
      <PostForm create={createPost} />
      <Input
        placeholder="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Select
        value={selectedSort}
        onChange={sortPosts}
        defaultValue="sort by"
        options={[
          { value: "title", name: "Name" },
          { value: "body", name: "by desc" },
        ]}
      />
      {posts.length ? (
        <div>
          <PostList
            posts={sortedPosts}
            title="posts about js"
            deletePost={deletePost}
          />
        </div>
      ) : (
        "no posts"
      )}
    </div>
  );
};

export default App;
