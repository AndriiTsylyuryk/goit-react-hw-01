import React, { useEffect, useMemo, useRef } from "react";
import { useState } from "react";

import PostItem from "./PostItem";
import PostList from "./PostList";
import PostForm from "./PostForm";
import Select from "./Select";
import Input from "./Input";
import PostFilter from "./PostFilter";
import Modal from "./Modal/Modal";
import { usePosts } from "./hooks/usePosts";
import axios from "axios";
import { getPageCount, getPagesArr } from "./utils/pages";

const App = () => {
  const [posts, setPosts] = useState([]);

  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [isPostsLoading, setIsPostsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  let pagesArr = getPagesArr(totalPages);

  useEffect(() => {
    fetchPosts(limit, page);
  }, []);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  async function fetchPosts(limit = 10, page = 1) {
    setIsPostsLoading(true);
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
      { params: { _limit: limit, _page: page } }
    );
    setPosts(response.data);
    // console.log(response.headers['x-total-count'])
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
    setIsPostsLoading(false);
  }

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div>
      <button
        type="button"
        style={{ marginTop: 30 }}
        onClick={() => fetchPosts()}
      >
        get posts
      </button>
      <button
        type="button"
        style={{ marginTop: 30 }}
        onClick={() => setModal(true)}
      >
        create user
      </button>
      <Modal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </Modal>

      <PostFilter filter={filter} setFilter={setFilter} />
      {isPostsLoading ? (
        <h1>loading</h1>
      ) : (
        <PostList
          posts={sortedAndSearchedPosts}
          title="posts about js"
          deletePost={deletePost}
        />
      )}
      {pagesArr.map((p) => (
        <button type="button">{p}</button>
      ))}
    </div>
  );
};

export default App;
