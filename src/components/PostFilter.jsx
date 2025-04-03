import React from "react";
import Input from "./Input";
import Select from "./Select";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      {" "}
      <Input
        placeholder="search"
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
      <Select
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue="sort by"
        options={[
          { value: "title", name: "Name" },
          { value: "body", name: "by desc" },
        ]}
      />
    </div>
  );
};

export default PostFilter;
