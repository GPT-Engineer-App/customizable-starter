import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const NewsFeed = () => {
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState("");

  const addPost = () => {
    setPosts([...posts, content]);
    setContent("");
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-4">
      <h1 className="text-4xl font-bold">News Feed</h1>
      <div className="space-y-4">
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's on your mind?"
        />
        <Button onClick={addPost}>Post</Button>
      </div>
      <ul className="space-y-2">
        {posts.map((post, index) => (
          <li key={index} className="border p-4 rounded">
            {post}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsFeed;